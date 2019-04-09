const Image = require('../models/image');

module.exports = {

    async popular(){
        return await Image.find()
            .limit(9)
            .sort({likes: -1});
    }
};