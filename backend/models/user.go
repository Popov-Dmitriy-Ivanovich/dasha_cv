package models

import (
	//   "context"
	"fmt"
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	ID                    uint `gorm:"primaryKey" json:"-"`
	NameSurnamePatronimic string
	Job                   string
	BirthDate             time.Time
	Location              string
	AboutMe               string
	Cefr                  string
	Tags                  []Tag         `json:"-"`
	Edu                   []Edu         `json:"-"`
	PreviousJobs          []PreviousJob `json:"-"`
	Contacts              []Contact     `json:"-"`
}

func GetDatabase() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		fmt.Println(err)
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&User{}, &Tag{}, &Edu{}, &PreviousJob{}, &JobDescription{}, &Contact{})
	desbordante_end := time.Date(2024, time.March, 1, 0, 0, 0, 0, time.Local)
	aurus_end := time.Date(2025, time.April, 1, 0, 0, 0, 0, time.Local)
	db.FirstOrCreate(&User{
		NameSurnamePatronimic: "PopovDmitriyIvanovich",
		Job:                   "C++ Developer",
		BirthDate:             time.Date(2003, time.March, 15, 0, 0, 0, 0, time.Local),
		Location:              "Moscow",
		AboutMe:               "BUBUBUBABABA",
		Cefr:                  "B2",
		Tags:                  []Tag{{Value: "C++"}, {Value: "Go"}, {Value: "make"}, {Value: "CMake"}, {Value: "Boost"}},
		Edu:                   []Edu{{Place: "МЭИ"}},
		PreviousJobs: []PreviousJob{
			{
				Title:     "Desbordante",
				DateBegin: time.Date(2023, time.June, 1, 0, 0, 0, 0, time.Local),
				DateEnd:   &desbordante_end,
				Description: []JobDescription{
					{Paragraph: "Разработка модуля верификации AUCC зависимостей. Модуль вошел в математическое ядро платформы и расширил область применения продукта."},
					{Paragraph: "Разработка системы приведения целочисленных типов"},
				},
			},

			{
				Title:     "ОООООО АУРУС",
				DateBegin: time.Date(2024, time.March, 1, 0, 0, 0, 0, time.Local),
				DateEnd:   &aurus_end,
				Description: []JobDescription{
					{Paragraph: "Разработал бэкэнд веб-приложения учета генетической информации крупного рогатого скота Воронежской области"},
					{Paragraph: "Доработка модуля поиска теневых треугольников и расчета переотражений лучей в 3-х мерной сцене. Удалось добиться примерно 7-кратного прироста производительности."},
					{Paragraph: "Разработка и внедрение консоли разработчика, интегрированной с основными модулями программного комплекса. Это позволило находить ошибки в работе системы визуально (на глаз), и ускорило процесс тестирования."},
				},
			},
			{
				Title:     "IEK-DIGITAL",
				DateBegin: time.Date(2025, time.April, 1, 0, 0, 0, 0, time.Local),
				DateEnd:   nil,
				Description: []JobDescription{
					{Paragraph: "Перенос рецептов сборки conan с версии 1 на версию 2, в рамках создания локального репозитория зависимостей на случай блокировок."},
					{Paragraph: "Исследование способов создания дампов приложения без завершения процесса на ОС Linux, внедрение библиотеки Google Breakpad (возможность собрать gcore для каждой целевой платформы отсутствует). Внедрение библиотеки позволит быстрее обрабатывать заявки пользователей, столкнувшихся с проблемами в работе системы."},
				},
			},
		},
		Contacts: []Contact{{Type: "PhoneNumber", Value: "8 (962) 659-  48 -02"}, {Type: "Telegram", Value: "@nodiscard"}, {Type: "Email", Value: "popov.dmitriy.ivanovich@gmail.com"}, {Type: "link", Value: "www.leningrad.ru"}},
	})
	return db
}
