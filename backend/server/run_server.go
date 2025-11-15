package server

import (
	"dasha_cv_backend/models"

	"github.com/gin-gonic/gin"

	_ "dasha_cv_backend/docs"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title           Diplom API
// @version         1.0

// @termsOfService  http://swagger.io/terms/

// @contact.name   API Support
// @contact.url    http://www.swagger.io/support
// @contact.email  support@swagger.io

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @host      localhost:8080
// @BasePath  /

// @securityDefinitions.basic  BasicAuth

// @externalDocs.description  OpenAPI
// @externalDocs.url          https://swagger.io/resources/open-api/

// Get
// @Summary      Get list of user ids
// @Description  Возращает список id всех доступных user
// @Tags         User
// @Produce      json
// @Success      200  {object}   []uint
// @Failure      404  {object}   nil
// @Router       /users [get]
func all_users(c *gin.Context) {
	db := models.GetDatabase()
	ids := []uint{}

	if err := db.Model(models.User{}).Pluck("id", &ids).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, ids)
}

// Get
// @Summary      Get concrete user
// @Description  Возращает пользователя
// @Param        id    path     uint true  "ID пользователя"
// @Tags         User
// @Produce      json
// @Success      200  {object}   models.User
// @Failure      404  {object}   nil
// @Router       /users/{id} [get]
func concrete_user(c *gin.Context) {
	db := models.GetDatabase()
	user := models.User{}
	if err := db.First(&user, map[string]any{"id": c.Param("id")}).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, user)
}

// Get
// @Summary      Get list of user skills
// @Description  Возращает список навыков пользователя
// @Param        id    path     uint true  "ID пользователя"
// @Tags         User
// @Produce      json
// @Success      200  {object}   []models.Tag
// @Failure      404  {object}   nil
// @Router       /users/{id}/tags [get]
func tags(c *gin.Context) {
	db := models.GetDatabase()
	res := []models.Tag{}
	if err := db.Find(&res, map[string]any{"user_id": c.Param("id")}).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, res)
}

// Get
// @Summary      Get list of user educations
// @Description  Возращает список образований пользователя
// @Param        id    path     uint true  "ID пользователя"
// @Tags         User
// @Produce      json
// @Success      200  {object}   []models.Edu
// @Failure      404  {object}   nil
// @Router       /users/{id}/edu [get]
func edu(c *gin.Context) {
	db := models.GetDatabase()
	res := []models.Edu{}
	if err := db.Find(&res, map[string]any{"user_id": c.Param("id")}).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, res)
}

// Get
// @Summary      Get list of user jobs
// @Description  Возращает список предыдущих работ пользователя
// @Param        id    path     uint true  "ID пользователя"
// @Tags         User
// @Produce      json
// @Success      200  {object}   []models.PreviousJob
// @Failure      404  {object}   nil
// @Router       /users/{id}/jobs [get]
func jobs(c *gin.Context) {
	db := models.GetDatabase()
	res := []models.PreviousJob{}
	if err := db.Preload("Description").Find(&res, map[string]any{"user_id": c.Param("id")}).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, res)
}

// Get
// @Summary      Get list of user contacts
// @Description  Возращает список контактов пользователя
// @Param        id    path     uint true  "ID пользователя"
// @Tags         User
// @Produce      json
// @Success      200  {object}   []models.Contact
// @Failure      404  {object}   nil
// @Router       /users/{id}/contacts [get]
func contacts(c *gin.Context) {
	db := models.GetDatabase()
	res := []models.Contact{}
	if err := db.Find(&res, map[string]any{"user_id": c.Param("id")}).Error; err != nil {
		c.AbortWithError(404, err)
		return
	}
	c.JSON(200, res)
}

func RunServer() {
	models.GetDatabase()
	router := gin.Default()
	router.GET("/ping", all_users)

	router.GET("/users/:id", concrete_user)

	router.GET("/users", all_users)

	router.GET("/users/:id/tags", tags)

	router.GET("/users/:id/edu", edu)

	router.GET("/users/:id/jobs", jobs)

	router.GET("/users/:id/contacts", contacts)

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	router.Run() // listens on 0.0.0.0:8080 by default
}
