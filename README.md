## React-Graphql

This is a ready-to-go template for an react app with Graphql using Postgresql and Hasura.

### Notes

*   There is an issue using workspaces with yarn 1.2.* the recommended version is 1.19.1 or use yarn2
*   You should store your HASURA_GRAPHQL_ADMIN_SECRET in another file, this is just an example and could lead to security issues
*   You should create an USER and ROLES in the Database (you can use MySQL too if you want)
*   This template is just a starting point, you SHOULD change the hardcoded HASURA_GRAPHQL_ADMIN_SECRET and implement sign in, sign out, auth... services