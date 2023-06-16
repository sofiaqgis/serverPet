const fs = require('fs');
const db = JSON.parse(fs.readFileSync(__dirname + '/db.json', 'utf8'));

class PetSource {

  getCategories() {
    return db.categories;
  }

  getPhotos() {
    return db.photos;
  }

  getUsers() {
    return db.users;
  }

  getCategory(categoryId) {
        const dataFile = fs.readFileSync(__dirname + '/db.json', { encoding: 'utf-8' });
        const parsedFile = JSON.parse(dataFile);
        const category = (parsedFile.db.categories.find(i => i.id == categoryId))
        return category;
      }

      getUsers(userId) {
        const dataFile2 = fs.readFileSync(__dirname + '/db.json', { encoding: 'utf-8' });
        const parsedFile2 = JSON.parse(dataFile2);
        const user = (parsedFile2.db.users.find(i => i.id == userId))
        return user;
      }

      getPhotos(photoId) {
        const dataFile3 = fs.readFileSync(__dirname + '/db.json', { encoding: 'utf-8' });
        const parsedFile3 = JSON.parse(dataFile3);
        const photo = (parsedFile3.db.photos.find(i => i.id == photoId))
        return photo;
      }

}

module.exports = PetSource;