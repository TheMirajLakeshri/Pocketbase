/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4p3foytsgw0cz7")

  collection.name = "company"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4p3foytsgw0cz7")

  collection.name = "users_duplicate"

  return dao.saveCollection(collection)
})
