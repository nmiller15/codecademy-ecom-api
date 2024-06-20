# eCommerce REST API

<style>
    :root {
        --post: #7AC74F;
        --post-background: rgba(122, 199, 79, 0.49);
        --put: #E0C879;
        --put-background: rgba(224, 200, 121, 0.48);
        --get: #3891A6;
        --get-background: rgba(56, 145, 166, 0.49);
        --delete: #E87461;
        --delete-background: rgba(232, 116, 97, 0.46);
    }
    div.banner {
        border-radius: 10px;
        padding-left: 10px;
        height: 60px;
        line-height: 60px;
        margin-bottom: 15px;
    }
    div.endpoint {
        font-size: 24px;
        font-weight: 500;
    }
    span {
        line-height: 40px;
        font-size: 20px;
        margin: 10px;
        height: 40px;
        width: auto;
        padding: 5px 15px;
        border-radius: 10px;
        text-align: center;
        padding-left: 19px
    }
    span.get { background-color: var(--get); }
    div.get { background-color: var(--get-background); }
    span.post { background-color: var(--post); }
    div.post { background-color: var(--post-background); }
    span.put { background-color: var(--put); }
    div.put { background-color: var(--put-background); }
    span.delete { background-color: var(--delete); }
    div.delete { background-color: var(--delete-background); }
    span.test { background-color: var(--test); }
    div.test { background-color: var(--test-background); }
    
</style>

A Codecademy Project

This project is a REST API that could be used for a simple eCommerce application. The API provides endpoints to access user information, provides the ability to create an account and login, and get information about products and their associated carts and orders. I built this as a project for the Back-End Section of my Codecademy Full-Stack Developer Certification. It will soon be used to develop a full-stack eCommerce platform. 

## Endpoints

<div class="banner get">
    <div class="endpoint"> 
        <span class="get">
            GET
        </span> 
        /test 
    </div>
</div>

"Test ok", /test is located after each of the main section endpoints - i.e. /orders/test

### Users

<div class="banner post">
    <div class="endpoint">
        <span class="post">
            POST
        </span>
        /register
    </div>
</div>

Register a user

#### Request Body


