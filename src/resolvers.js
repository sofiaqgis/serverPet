
const resolvers = {

    Query: {
        categories: async (_, __, {dataSources}) => {
            return dataSources.PetSource.getCategories();
          },

          users: async (_, __, {dataSources}) => {
            return dataSources.PetSource.getUsers();
          },

          photos: async (_, __, {dataSources}) => {
            return dataSources.PetSource.getPhotos();
          },
            category: async (_, { id }, context) => {
             return context.dataSources.PetSource.getCategory(id);},
            user: async (_, { id }, context) => {
            return context.dataSources.PetSource.getUser(id);},
            photo: async (_, { id }, context) => {
            return context.dataSources.PetSource.getPhoto(id);}
        

    }
    }
  
    export default resolvers;
  