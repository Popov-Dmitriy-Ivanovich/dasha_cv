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
                title: "ООО АУРУС",
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
            <h1 style={{ border: "2px solid grey", backgroundColor: "#F9F2E3", padding: "5px", borderRadius: "7px", fontWeight: "normal", fontSize: "12pt", color: "black" }}>{page_content.name_surname_patronimic}</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid grey", padding: "5px", borderRadius: "7px", fontWeight: "normal", fontSize: "12pt", color: "black", }}>
                <span>{page_content.job_main}</span>
                <span>Опыт работы:  {page_content.seniority}</span>
                <span>Дата рождения:  {page_content.birthdate} </span>
                <span>Возраст: {page_content.age}</span>
                {/*возраст в скобочках меняется в зависимости от года и числа*/}
                <span>{page_content.city}</span>
            </div>
        </div >
    );
}
function Bio() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>{page_content.about_me}</div>
        </div >

    );


}

function Education() {
    let uni = [];
    for (let i = 0; i < page_content.edu.length; ++i) {
        uni.push({ value: page_content.edu[i], key: i });
    }
    console.log(uni);
    let university = uni.map(edu => <div key={edu.key}> {edu.value}</ div >)
    return (
        <>Образование: {university}</>
    );
}

function Tags() {
    console.log(page_content.job_description)
    let tags = [];
    for (let i = 0; i < page_content.job_description.length; ++i) {
        tags.push({ value: page_content.job_description[i], key: i });
    }
    console.log(tags);
    /*
    let variable
    function foo(arg1, arg2){
        for(i=0;i<arg1;++i)
            console.log("privet")
            for(i=0;i<arg2;++i)
            console.log("mir")
    }

            foo(1, 2)
            foo(3, 4)


            function foo(arg1, arg2)
            foo(1, 2)

            let obj = {
                name: "vanya"
        print_name: () => {console.log(this.name)} 
    }
            let obj_copy = {...obj}
            obj_copy.name = "petya"
            obj_copy.print_name() // petya
            obj.print_name() // vanya
            */
    let list_items = tags.map(tag => <div key={tag.key}> {tag.value}</ div >)


    return (
        <>{list_items}</>
    );
}



function Contacts() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px,solid,grey", padding: "5px", borderRadius: "7px", fontWeight: "normal", fontSize: "12pt", color: "black", }}>
            <div>{page_content.contacts.phone_number}</div>
            <div>{page_content.contacts.telegram}</div>
            <div>{page_content.contacts.link}</div>
            <div>{page_content.contacts.email}</div>
            <div>{page_content.cefr}</div>
        </div>
    )
}

function DateToStr(date) {
    if (!date) {
        return "настоящее время"
    }
    return date
}

function PreviousJobs() {
    let jobsList = [];
    for (let i = 0; i < page_content.previous_jobs.length; ++i) {
        jobsList.push({ value: page_content.previous_jobs[i], key: i });
    };
    console.log(jobsList);
    let jobsItems = page_content.previous_jobs.map(jobsList => <div key={jobsList.key}> {jobsList.value}</ div >);
    console.log(jobsItems);


    return (
        <span>
            <div>
                <div>{page_content.previous_jobs[0].title}</div>
                <div>{page_content.previous_jobs[0].data_begin}- {DateToStr(page_content.previous_jobs[0].data_finish)}</div>
                <div>{page_content.previous_jobs[0].description}</div>
            </div>
            <div>
                <div>{page_content.previous_jobs[1].title}</div>
                <div>{page_content.previous_jobs[1].data_begin}- {DateToStr(page_content.previous_jobs[1].data_finish)}</div>
                <div>{page_content.previous_jobs[1].description}</div>
            </div>
            <div>
                <div>{page_content.previous_jobs[2].title}</div>
                <div>{page_content.previous_jobs[2].data_begin}- {DateToStr(page_content.previous_jobs[2].data_finish)}</div>
                <div>{page_content.previous_jobs[2].description}</div>
            </div>
        </span>


    );


}
function Finish() {
    let f = page_content.previous_jobs[2].data_finish;
    if (f === null) {
        f = "настоящее время";
        return (f);
    }
}



/*
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
 
let ternary = (par)=> {
    if (par) {
        return 'magneta'
    } else {
        return 'darkgreen'
    }
}
 
let var1 = product.IsFruit ? 'magenta' : 'darkgreen';
let var2 = ternary(product.IsFruit);
 
let listItems = []
for (let i = 0; i < products.length; ++i) {
    listItems.push(<li key = products[i].id> products[i].value </li>)
}
 
То же самое, что и 
// dummy({id: "123", title: "321233"})
func dummy (p) {
    return <li key=p.id> {p.title}</li>
}
p => <li key = p.id> {p.title} </li>
const li = products.map(dummy)
[dummy(products[0]), dummy(products[1]), ...]
[<li key=1> Капуста</li>, <li key = 2> Чеснок </li> ...]
*/

export function PageContent() {
    if (!page_content) {
        load_page_content();
    }
    return (

        <div className="page_content">
            { }
            <General_info />
            <Contacts />
            <Education />
            <Bio />
            <Tags />
            {/* <Finish /> */}
            <PreviousJobs></PreviousJobs>

        </div >

    );
}
