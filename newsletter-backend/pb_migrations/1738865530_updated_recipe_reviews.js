/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "createRule": "\nid != \"\"",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "createRule": "id=\"\"",
    "updateRule": null
  }, collection)

  return app.save(collection)
})
