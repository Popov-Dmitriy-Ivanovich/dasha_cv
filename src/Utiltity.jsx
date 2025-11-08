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

        edu: "НИУ 'МЭИ'Кафедра 'Вычислительных машин, систем и сетей' института информационных и вычислительных технологий НИУ МЭИ",
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

function NameSurnamePatronimic() {
    return (
        <h1>
            {page_content.name_surname_patronimic}
        </h1>
    )
}

function SingleJobDescription({job_description}){
    let p_num = 0;
    const paragraphs = job_description.map( paragraph => (
        <p key={p_num++}>
            {paragraph}
        </p>
    ))
    return (<>
        {paragraphs}
    </>)
}

function SingleJob({job}){
    console.log("SingleJob job = ",job)
    let finish_date = "настоящее время";
    if(job.data_finish) {
        finish_date = job.data_finish;
    }
    return (<>
        <h2>{job.title}</h2>
        <span className="single_job_period">{job.data_begin} - {finish_date}</span> 
        <SingleJobDescription job_description={job.description}></SingleJobDescription>
    </>)
}

function Jobs() {
    return (<><SingleJob job={page_content.previous_jobs[0]}></SingleJob></>)
}

function Contacts() {
    let phone_number = (<></>);
    if (page_content && page_content.contacts && page_content.contacts.phone_number) {
        phone_number = (<><li><span>Номер телелфона: {page_content.contacts.phone_number}</span></li></>)
    }

    let telegram = (<></>);
    if (page_content && page_content.contacts && page_content.contacts.telegram) {
        telegram = (<><li><span>Телеграм: {page_content.contacts.telegram}</span></li></>)
    }
    let email = (<></>)
    if (page_content && page_content.contacts && page_content.contacts.email) {
        email = (<><li><span>Почта: {page_content.contacts.email}</span></li></>)
    }

    let link = (<></>)
    if (page_content && page_content.contacts && page_content.contacts.link) {
        link = (<><li><span>Почта: {page_content.contacts.link}</span></li></>)
    }
    return (
        <div className="contacts">
            <ul>
                {phone_number}
                {telegram}
                {email}
                {link}
            </ul>
        </div>
    )
}

export function PageContent() {
    if (!page_content) {
        load_page_content();
    }
    return (
        <div className="page_content">
            <NameSurnamePatronimic></NameSurnamePatronimic>
            <Contacts></Contacts>
            <Jobs></Jobs>
            {/* {JSON.stringify(page_content)} */}
        </div>
    );
}