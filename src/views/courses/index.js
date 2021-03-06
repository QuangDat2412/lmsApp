import React, { useState, useCallback, useEffect } from 'react';
import Filter from './Filter';
import {
    CFormLabel,
    CForm,
    CModalTitle,
    CModalHeader,
    CModalBody,
    CModal,
    CButton,
    CFormInput,
    CCol,
    CModalFooter,
    CFormSelect,
    CFormFeedback,
    CCard,
    CCardBody,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';
import { OthersSelector } from 'src/redux/others/slice';
import TableCustom from 'src/components/table';
import { useNavigate } from 'react-router-dom';
import UploadImage from 'src/components/uploadImage';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Courses = () => {
    let navigate = useNavigate();
    const courseForm = { name: '', code: '123', status: 1, type: '', image: '', description: '' };
    const [inputs, setInputs] = useState({ ...courseForm });
    const filterForm = { name: '', status: 0 };
    const [filter, setFilter] = useState(filterForm);
    const options = useSelector(OthersSelector.options);
    const isLoading = useSelector(OthersSelector.isLoading);
    const typeCourse = options?.typeCourse || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(courseActions.getCourse(filter));
    }, [filter, dispatch]);
    const courses = useSelector(courseSelector.courses);
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);

    const makeCode = (n) => {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    const openMoDalAdd = (course, type) => {
        if (type === 'update') {
            const _course = { ...course };
            setInputs(_course);
        } else if (type === 'add') {
            setInputs({ ...courseForm, code: makeCode(6) });
        }
        setActionType(type);
        setVisible(true);
    };
    const data = {
        data: courses.map((c, i) => {
            return { ...c, typeName: c.typeObj.name };
        }),
        actions: [
            {
                key: 'update',
                value: 'Ch???nh s???a',
                openMoDalAdd: function (user, type) {
                    return openMoDalAdd(user, type);
                },
            },
            {
                key: 'detail',
                value: 'N???i dung kh??a h???c',
                openMoDalAdd: function (data) {
                    navigate('/courses/' + data.code, { replace: true });
                },
            },
            {
                key: 'delete',
                value: 'Xo??',
                openMoDalAdd: function (obj, type) {
                    return deleteT(obj, type);
                },
            },
        ],
        header: [
            {
                key: 'code',
                value: 'M?? kh??a h???c',
            },
            {
                key: 'name',
                value: 'T??n kh??a h???c',
            },
            {
                key: 'typeName',
                value: 'Lo???i kh??a h???c',
            },
            {
                key: 'status',
                value: 'Tr???ng th??i',
                type: 'status',
            },
        ],
    };
    const deleteT = (obj) => {
        Promise.resolve(dispatch(courseActions.deleteCourse(obj)))
            .then((data) => {
                dispatch(courseActions.getCourse(filter));
            })
            .catch(() => {});
    };
    const handleChangeFilter = useCallback((e) => {
        setFilter((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);
    const saveCourse = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            Promise.resolve(dispatch(courseActions.saveCourse(inputs)))
                .then((data) => {
                    closeModal();
                    dispatch(courseActions.getCourse(filter));
                })
                .catch(() => {});
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    const setUrl = (e) => {
        setInputs((prev) => {
            return { ...prev, image: e };
        });
    };
    return (
        <>
            <CCard>
                <CCardBody>
                    <Filter openMoDalAdd={openMoDalAdd} handleChangeFilter={handleChangeFilter} />
                    <TableCustom datas={data} />
                </CCardBody>
            </CCard>
            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Th??m m???i kh??a h???c' : 'Ch???nh s???a kh??a h???c'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">T??n kh??a h???c</CFormLabel>
                            <CFormInput type="text" label="T??n kh??a h???c" required name="name" onChange={handleChange} value={inputs.name} />
                            <CFormFeedback invalid>Vui l??ng nh???p t??n kh??a h???c.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Code</CFormLabel>
                            <CFormInput type="text" label="Code" required name="code" disabled={true} value={inputs.code} />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Tr???ng th??i</CFormLabel>
                            <CFormSelect required onChange={handleChange} name="status" value={inputs.status}>
                                <option value="1">??ang ho???t ?????ng</option>
                                <option value="2">Ng???ng ho???t ?????ng</option>
                            </CFormSelect>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Lo???i kh??a h???c</CFormLabel>
                            <CFormSelect required name="type" onChange={handleChange} value={inputs.type}>
                                <option value="">Ch???n kh??a h???c</option>
                                {typeCourse.map((t) => {
                                    return (
                                        <option value={t._id} key={t._id}>
                                            {t.name}
                                        </option>
                                    );
                                })}
                            </CFormSelect>
                            <CFormFeedback invalid>Vui l??ng ch???n lo???i kh??a h???c.</CFormFeedback>
                        </CCol>
                        <CCol lg="12">
                            <CFormLabel htmlFor="validationServerUsername">M?? t???</CFormLabel>
                            <CKEditor
                                editor={ClassicEditor}
                                data={inputs.description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setInputs((prev) => {
                                        return { ...prev, description: data };
                                    });
                                }}
                            />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">???nh n???n</CFormLabel>
                            <UploadImage type="thumbnail" setUrl={setUrl} url={inputs.image} />
                        </CCol>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)} className="btn-modal">
                                ????ng
                            </CButton>
                            <CButton color="warning" type="submit" className="btn-modal">
                                L??u l???i
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

export default Courses;
