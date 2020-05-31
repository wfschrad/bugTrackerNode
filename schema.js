// const axios = require('axios');
// import sequelize

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

//Bug Type
const BugType = new GraphQLObjectType({
    name: 'Bug',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        priorityLvl: { type: GraphQLInt },
        projectId: { type: GraphQLInt },
        assignedTo: { type: GraphQLInt },
        isCompleted: { type: GraphQLBoolean }
    })
});

//Project Type

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        isComplete: { type: GraphQLBoolean },
    })
});

//Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        bugs: {
            type: new GraphQLList(BugType),
            async resolve(parent, args) {

                // res = await axios.get('https://api.spacexdata.com/v3/launches');

                // Query database with Sequelize

                console.log('res in server', res)
                return res.data;
            }
        },
        bug: {
            type: BugType,
            args: {
                bugId: { type: GraphQLInt }
            },
            async resolve(parent, args) {

                // access db here

                // res = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`);
                return res.data;
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            async resolve(parent, args) {

                // access db

                // res = await axios.get('https://api.spacexdata.com/v3/rockets');
                return res.data;
            }
        },
        project: {
            type: ProjectType,
            args: {
                projectId: { type: GraphQLInt }
            },
            async resolve(parent, args) {

                // hit db

                // res = await axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`);
                return res.data;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});