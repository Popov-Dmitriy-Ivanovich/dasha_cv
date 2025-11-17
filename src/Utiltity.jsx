let page_content = null;

function load_page_content() {
    page_content = {
        name_surname_patronimic: "Попов Дмитрий Иванович",
        job_main: "C++ / Go разработчик",
        seniority: "3 года",
        birthdate: "15.03.2003г.",
        age: "22",
        city: "г.Москва",
        contacts: {
            phone_number: "+7(962)659-48-02",
            telegram: "@nodiscard",
            email: "popov.dmitriy.ivanovich@gmail.com",
            link: "www.leningrad.ru",
        },

        edu: ["НИУ 'МЭИ'Кафедра 'Вычислительных машин, систем и сетей' института информационных и вычислительных технологий НИУ МЭИ"],
        about_me:
            "Бакалавр компьютерных наук (09.03.01 «Информатика и вычислительная техника»), в студенческие годы поучаствовал в нескольких хакатонах в роли капитана команды, разработчика и «водоноса» одновременно. Внес вклад в open-source проект Desbordante – наукоёмкий профилировщик данных для поиска сложных функциональных зависимостей.",

        job_description: [
            "С/C++f",
            "cmake",
            "make",
            "CUDA",
            "glm",
            "ImGui",
            "stl",
            "Boost",
            "google testing framework",
            "googlebreakpad",
            "PostgreSQL",
            "Python 'fastAPI,pyQT,SQLAlchemy",
            "QT",
            "Redis",
            "REST",
            "GraphQL",
            "Nginx",
            "git",
            "CI/CD",
            "go",
            "gorm",
            "swaggo",
            "gin",
            "docker",
            "k8s",
            "Linux",
        ],
        cefr: "B2",
        previous_jobs: [
            {
                title: "Desbordante",
                data_begin: "июнь 2023",
                data_finish: "март 2024",
                description: [
                    "Разработка модуля верификации AUCC зависимостей. Модуль вошел в математическое ядро платформы и расширил область применения продукта.",
                    "Разработка системы приведения целочисленных типов",
                ],
            },
            {
                title: "ОООООО АУРУС",
                data_begin: "март 2024",
                data_finish: "апрель 2025",
                description: [
                    "Разработал бэкэнд веб-приложения учета генетической информации крупного рогатого скота Воронежской области",
                    "Доработка модуля поиска теневых треугольников и расчета переотражений лучей в 3-х мерной сцене. Удалось добиться примерно 7-кратного прироста производительности.",
                    "Разработка и внедрение консоли разработчика, интегрированной с основными модулями программного комплекса. Это позволило находить ошибки в работе системы визуально (на глаз), и ускорило процесс тестирования.",
                ],
            },
            {
                title: "IEK-DIGITAL",
                data_begin: "апрель 2025",
                data_finish: null,

                description: [
                    "Перенос рецептов сборки conan с версии 1 на версию 2, в рамках создания локального репозитория зависимостей на случай блокировок.",
                    "Исследование способов создания дампов приложения без завершения процесса на ОС Linux, внедрение библиотеки Google Breakpad (возможность собрать gcore для каждой целевой платформы отсутствует). Внедрение библиотеки позволит быстрее обрабатывать заявки пользователей, столкнувшихся с проблемами в работе системы.",
                ],
            },
        ],
    }
}
function General_info() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ border: "2px,solid,green", backgroundColor: "yellow", padding: "5px", borderRadius: "7px", fontWeight: "normal", fontSize: "12pt", textDecoration: "underline", color: "blue" }}>{page_content.name_surname_patronimic}</h1>
            <span>{page_content.birthdate}</span>
            <span>{page_content.job_main}</span>
            <span>{page_content.seniority}</span>
        </div >
    );

}
function Tags() {
    console.log(page_content.job_description)
    let tags = [];
    for (let i = 0; i < page_content.job_description.length; ++i) {
        tags.push({ value: page_content.job_description[i], key: i });
    }
    console.log(tags)
}

export function PageContent() {
    if (!page_content) {
        load_page_content();
    }
    Tags();
    return (
        <div className="page_content">
            { }
            <General_info />
        </div>

    );
}
