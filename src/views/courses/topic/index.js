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
    CCardBody,
    CCard,
    CCol,
    CModalFooter,
    CFormSelect,
    CFormFeedback,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';
import { topicActions, topicSelector } from 'src/redux/topic/topic.slice';
import TableCustom from 'src/components/table';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Topics = () => {
    const topicForm = { name: '', courseId: '', description: '', image: '', listLessons: [] };
    const [inputs, setInputs] = useState({ ...topicForm });
    const filterForm = { name: '', courseId: '0' };
    const [filter, setFilter] = useState(filterForm);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(courseActions.getCourse({ name: '', status: 1 }));
    }, [dispatch]);
    useEffect(() => {
        dispatch(topicActions.getTopic(filter));
    }, [filter, dispatch]);
    const courses = useSelector(courseSelector.courses);
    const topics = useSelector(topicSelector.topics);
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);

    const openMoDalAdd = (topic, type) => {
        if (type === 'update') {
            const _topic = { ...topic };
            setInputs(_topic);
        } else if (type === 'add') {
            setInputs({ ...topicForm });
        }
        setActionType(type);
        setVisible(true);
    };
    const deleteT = (obj) => {
        Promise.resolve(dispatch(topicActions.deleteTopic(obj)))
            .then((data) => {
                dispatch(topicActions.getTopic(filter));
            })
            .catch(() => {});
    };
    const data = {
        data: topics.map((c, i) => {
            return { ...c, course: c.course?.name, index: i + 1 };
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
                key: 'delete',
                value: 'Xo??',
                openMoDalAdd: function (obj, type) {
                    return deleteT(obj, type);
                },
            },
        ],
        header: [
            {
                key: 'index',
                value: 'STT',
            },
            {
                key: 'name',
                value: 'T??n ch??? ?????',
            },
            {
                key: 'course',
                value: 'Kho?? h???c',
            },
            {
                key: 'description',
                value: 'M?? t???',
                type: 'html',
            },
        ],
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
            Promise.resolve(dispatch(topicActions.saveTopic(inputs)))
                .then((data) => {
                    closeModal();
                    dispatch(topicActions.getTopic(filter));
                })
                .catch(() => {});
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    return (
        <>
            <CCard>
                <CCardBody>
                    <Filter openMoDalAdd={openMoDalAdd} handleChangeFilter={handleChangeFilter} courses={courses} />
                    <TableCustom datas={data} />
                </CCardBody>
            </CCard>

            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Th??m m???i ch??? ?????' : 'Ch???nh s???a ch??? ?????'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">T??n ch??? ?????</CFormLabel>
                            <CFormInput type="text" label="T??n ch??? ?????" required name="name" onChange={handleChange} value={inputs.name} />
                            <CFormFeedback invalid>Vui l??ng nh???p t??n ch??? ?????.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Kh??a h???c</CFormLabel>
                            <CFormSelect required name="courseId" onChange={handleChange} value={inputs.courseId}>
                                <option value="">Ch???n kh??a h???c</option>
                                {courses.map((t) => {
                                    return (
                                        <option value={t._id} key={t._id}>
                                            {t.name}
                                        </option>
                                    );
                                })}
                            </CFormSelect>
                            <CFormFeedback invalid>Vui l??ng ch???n kh??a h???c.</CFormFeedback>
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

export default Topics;
