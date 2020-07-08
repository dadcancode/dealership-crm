# dealership-crm
simple customer resource manager for small to medium sized car dealership


## Models

### users
*   name
*   username
*   type (admin, manager, salesperson)
*   password

### prospects
*   name
*   interest (new/used, year, make, model)
*   phone number
*   email
*   status (sales_process_id, place in sales process)
*   comments
*   salesperson_id
*   vehicle_id

### sales process
*   name
*   ### tasks
    *    type (call, email, appointment)
    *    when to complete
    *    completed?
    *    comments (timestamp?)
    *    order

### vehicle
*   new/used
*   year
*   make
*   model

## User Stories

-   can create users (salespeople)
-   salespeople can add prospects
-   salespeople can view tasks assinged to prospect and add comments
-   tasks are populated in view for the salesperson
-   sp can comment on tasks and prospects
-   admin can create dif sales processes
-   sales process have tasks assinged to them
-   admin can see dashboard for each sales person and team as whole

## Stretch

-   automate emails that go out