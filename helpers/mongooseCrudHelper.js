/**
 * Generic controller that provide CRUD operations for a given mongoose model
 */
export default class BaseController {
    /**
     * Constructor
     * @param model Mongoose model 
     * @param key Primary key of the model 
     */
    constructor(model, key) {
        this.model = model;
        this.modelName = model.modelName.toLowerCase();
        this.key = key;
    }

    /**
     * Add new record for model
     * @param data New record 
     */
    create(data) {
        return this.model
          .create(data)
          .then((modelInstance) => {
            var response = {};
            response[this.modelName] = modelInstance;
            return response;
        });
    }
}

