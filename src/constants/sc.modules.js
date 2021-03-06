export const SC_MODULES = {
    ADMIN: 1,
};

const CATEGORY_FUNCS = {
    DASHBOARD: 1,
    PROGRAM: 2,
    CLASSROOM: 3,
    TEACHER: 4,
    STUDENT: 5,
    NEWS: 6,
    TRAINING: 7,
    SUPPORT_TICKET: 8,
    BLOG_POST: 9,
    PARENT_STUDENT: 10,
    FEEDBACK: 11,
    RESULT: 12,
};
/**
 * 1
 */
const DASHBOAD_FUNCS = {
    DASHBOAD_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.DASHBOARD}.1`,
};

/**
 * 2
 */
const PROGRAM_FUNCS = {
    PROGRAM_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.PROGRAM}.1`,
    PROGRAM_MATERIAL: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.PROGRAM}.2`,
};

/**
 * 3
 */
const CLASSROOM_FUNCS = {
    CLASSROOM_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.CLASSROOM}.1`,
    MY_CLASSROOM: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.CLASSROOM}.2`,
    LESSON_DETAILS: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.CLASSROOM}.3`,
};

/**
 * 4
 */
const TEACHER_FUNCS = {
    TEACHER_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.1`,
    TEACHER_DELETE: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.2`,
    TEACHER_BY_EXCEL: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.3`,
    // TEACHER_POSITION: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.4`,
    TEACHER_DEPARTMENT: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.4`,
    TEACHER_SC_ROLE: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.5`,
    TEACHER_SC_PRIVILEGE: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TEACHER}.6`,
};

/**
 * 5
 */
const STUDENT_FUNCS = {
    STUDENT_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.STUDENT}.1`,
    STUDENT_DELETE: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.STUDENT}.2`,
    STUDENT_SEARCH: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.STUDENT}.3`,
    STUDENT_BY_EXCEL: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.STUDENT}.4`,
};

/**
 * 6
 */
const NEWS_FUNCS = {
    NEWS_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.NEWS}.1`,
    NEWS_CATEGORY: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.NEWS}.2`,
};

/**
 * 7
 */
const TRAINING_FUNCS = {
    TRAINING: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.TRAINING}.1`,
};

/**
 * 8
 */
const SUPPORT_TICKET_FUNCS = {
    SUPPORT_TICKET: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.SUPPORT_TICKET}.1`,
};

/**
 * 9
 */
const BLOG_POST_FUNCS = {
    BLOG_POST: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.BLOG_POST}.1`,
};

/**
 * 9
 */
const PARENT_STUDENT_FUNCS = {
    PARENT_STUDENT: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.BLOG_POST}.1`,
};
/**
 *
 */
const FEEDBACK_FUNCS = {
    FEEDBACK_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.BLOG_POST}.1`,
};
const RESULT_FUNCS = {
    RESULT_MAIN: `${SC_MODULES.ADMIN}.${CATEGORY_FUNCS.BLOG_POST}.1`,
};
export const ADMIN_FUNCTIONS = {
    ...DASHBOAD_FUNCS,
    ...PROGRAM_FUNCS,
    ...CLASSROOM_FUNCS,
    ...TEACHER_FUNCS,
    ...STUDENT_FUNCS,
    ...NEWS_FUNCS,
    ...TRAINING_FUNCS,
    ...SUPPORT_TICKET_FUNCS,
    ...BLOG_POST_FUNCS,
    ...PARENT_STUDENT_FUNCS,
    ...FEEDBACK_FUNCS,
    ...RESULT_FUNCS,
    ADMIN: {
        // Th??nh ph???
        CITY: `${SC_MODULES.ADMIN}.${1}`,
        // Qu???n huy???n
        DISTRICT: `${SC_MODULES.ADMIN}.${2}`,
        // Ph?????ng x??
        WARD: `${SC_MODULES.ADMIN}.${3}`,
        // T??? ch???c
        ORGANIZATION: `${SC_MODULES.ADMIN}.${4}`,
        // Lo???i t??? ch???c
        ORGANIZATION_CATEGORY: `${SC_MODULES.ADMIN}.${5}`,
        // H??nh th???c t??? ch???c
        ORGANIZATION_TYPE: `${SC_MODULES.ADMIN}.${6}`,
        // Qui m?? t??? ch???c
        ORGANIZATION_SCALE: `${SC_MODULES.ADMIN}.${7}`,
        // Danh s??ch t??i kho???n
        ACCOUNT_LIST: `${SC_MODULES.ADMIN}.${8}`,
        // Vai tr?? ng?????i d??ng
        ACCOUNT_ROLE: `${SC_MODULES.ADMIN}.${9}`,
        // C???p quy???n s??? d???ng
        ACCOUNT_PRIVILEGE: `${SC_MODULES.ADMIN}.${10}`,
        // Ph??n h???
        ACCOUNT_MODULE: `${SC_MODULES.ADMIN}.${11}`,
        // T??nh n??ng
        ACCOUNT_FUNCTION: `${SC_MODULES.ADMIN}.${12}`,
        // S???n ph???m
        PRODUCT: `${SC_MODULES.ADMIN}.${13}`,
        // Danh m???c s???n ph???m
        PRODUCT_CATEGORY: `${SC_MODULES.ADMIN}.${14}`,
        // Nh?? cung c???p s???n ph???m (Th????ng hi???u)
        PRODUCT_SUPPLIER: `${SC_MODULES.ADMIN}.${15}`,
        // ????n v??? t??nh
        CALCULATION_UNIT: `${SC_MODULES.ADMIN}.${16}`,
        // T???o ????n b??n h??ng
        CREATE_ORDER: `${SC_MODULES.ADMIN}.${17}`,
        // Danh s??ch ????n b??n h??ng
        ORDER_LIST: `${SC_MODULES.ADMIN}.${18}`,
        // Khuy???n m??i
        PROMOTION: `${SC_MODULES.ADMIN}.${19}`,
        // C???a h??ng
        SHOP: `${SC_MODULES.ADMIN}.${20}`,
        // Phi???u thu chi
        FINANCE_TICKET: `${SC_MODULES.ADMIN}.${21}`,
        // S??? thu chi
        FINANCE_BOOK: `${SC_MODULES.ADMIN}.${22}`,
        // T??i kho???n k??? to??n
        ACCOUNTING_CATEGORY: `${SC_MODULES.ADMIN}.${23}`,
        // T??i kho???n ng??n h??ng
        ACCOUNT_BANK: `${SC_MODULES.ADMIN}.${24}`,
        // C???p b???n quy???n
        LICENCE_PRIVILEGE: `${SC_MODULES.ADMIN}.${25}`,
        // Danh s??ch b???n quy???n
        LICENCE_LIST: `${SC_MODULES.ADMIN}.${26}`,
        // Danh s??ch b???n quy???n s???p h???t h???n
        LICENCE_EXPIRED: `${SC_MODULES.ADMIN}.${27}`,
        // Y??u c???u h??? tr???
        SUPPORT_TICKET: `${SC_MODULES.ADMIN}.${28}`,
        // Th??ng b??o
        BLOG_POST: `${SC_MODULES.ADMIN}.${29}`,
        // Lo???i th??ng b??o
        BLOG_CATEGORY: `${SC_MODULES.ADMIN}.${30}`,
        // Danh m???c s??? ki???n
        TRIP_EVENT: `${SC_MODULES.ADMIN}.${31}`,
        // ??u ????i c??ng scfamily
        REWARD: `${SC_MODULES.ADMIN}.${32}`,
        // M???u b??o c??o
        REPORT_FORM: `${SC_MODULES.ADMIN}.${33}`,
        // H???p ?????ng
        CONTRACT_VOICECLOUD: `${SC_MODULES.ADMIN}.${34}`,
    },
};
