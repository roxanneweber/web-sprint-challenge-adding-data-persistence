# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected
_before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over
the past sprint and apply them in a concrete project. This sprint explored
**Data Persistence**. During this sprint, you studied **RDBMS, including SQL,
multi-table queries, and data modeling**. In your challenge this week, you will
demonstrate your mastery of these skills by creating **a database based on given
specifications**.

This is an individual assessment. All work must be your own. All projects will
be submitted to Codegrade for automated review. You will also be given feedback
by code reviewers a few days after the challenge submission. For more
information on the review process
[click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Run `npm install` to install your dependencies.
- [x] Run tests locally executing `npm test`.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a
database to satisfy them. As a part of this process you'll also build an API
with endpoints to access the data.

### Files to Complete

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js` inside `api/project`, `api/resource` and `api/task`
5. `router.js` inside `api/project`, `api/resource` and `api/task`
6. migration file(s)
7. seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the
`package.json` file. The tests depend on these scripts being correct!

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using
appropriate data types and constraints. **You must use the table names and the
column names described below.** To give a primary key a name different than
`id`, do `table.increments("project_id")` instead of `table.increments()`.

- [x] A **project** is what needs to be done and is stored in a `projects` table
      with the following columns:

  - [x] `project_id` - primary key
  - [x] `project_name` - required
  - [x] `project_description` - optional
  - [x] `project_completed` - the database defaults it to `false` (integer 0) if
        not provided

- [x] A **resource** is anything needed to complete a project and is stored in a
      `resources` table with the following columns:

  - [x] `resource_id` - primary key
  - [x] `resource_name` - required and unique
  - [x] `resource_description` - optional

- [x] A **task** is one of the steps needed to complete a project and is stored
      in a `tasks` table with the following columns:

  - [x] `task_id` - primary key
  - [x] `task_description` - required
  - [x] `task_notes` - optional
  - [x] `task_completed` - the database defaults it to `false` (integer 0) if
        not provided
  - [x] `project_id` - required and points to an actual `project_id` in the
        `projects` table

- [x] A **resource assignment** connects a resource and a project, and is stored
      in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [x] `[POST] /api/resources`

  - Example of response body:
    `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [x] `[GET] /api/resources`

  - Example of response body:
    `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [x] `[POST] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses
    booleans when interacting with the client
  - Example of response body:
    `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [x] `[GET] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses
    booleans when interacting with the client
  - Example of response body:
    `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [x] `[POST] /api/tasks`

  - Even though `task_completed` is stored as an integer, the API uses booleans
    when interacting with the client
  - Example of response body:
    `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [x] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans
    when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body:
    `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Important Notes (READ!)**

- Run tests locally by executing `npm run test`. Tests will be very broken until
  you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not
  move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional**
  dependencies and scripts. Do not update existing packages.
- Delete `test.db3` and `database.db3` and re-run migrations and tests, if you
  suspect half-finished code left your databases in a broken state.
- In your solution, it is essential that you follow best practices and produce
  clean and professional results.

## Submission format

- [x] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [x] Check Codegrade before the deadline to compare its results against your
      local tests.
- [x] Check Codegrade on the days following the Sprint Challenge for reviewer
      feedback.
- [x] New commits will be evaluated by Codegrade if pushed _before_ the sprint
      challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by
answering questions on the following topics. You might prepare by writing down
your own answers before hand.

1. Explain the difference between Relational Databases and SQL. Relational
   databases store data using relational tables. SQL is the standard language
   that most of these types of databases use to query, manipulate and aggregate
   the data. While the database holds the data, with SQL we can turn it into
   usable information.

2. Why do tables need a Primary Key? Primary keys are the unique identifier for
   a row of data and absolutely every table should contain a primary key column.
   Primary keys also help us link tables together as they can become foreign
   keys on another table.

3. What is the name given to a table column that references the Primary Key on
   another table? A foreign key points to the primary key on another table.

4. What do we need in order to have a many to many relationship between two
   tables? An appointment table describes a many to many relationship and is
   needed when multiple records in one table may be associated with multiple
   records in another table (for example, doctors and patients--a doctor may
   have many patients and a patient may also have multiple doctors). The table
   that holds records of these relationships would have a primary key column as
   well as foreign keys pointing to data involved in the many-to-many
   relationship. Having this type of intermediary table is is critical for
   database normalization.
