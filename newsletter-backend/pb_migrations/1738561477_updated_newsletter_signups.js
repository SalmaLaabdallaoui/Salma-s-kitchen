/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1315101817")

  // update collection data
  unmarshal({
    "createRule": "id != \"\"\n\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1315101817")

  // update collection data
  unmarshal({
    "createRule": "id=''"
  }, collection)

  return app.save(collection)
})
