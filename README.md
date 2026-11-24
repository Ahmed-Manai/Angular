# Angular

An early Angular 10 learning app: routing between two pages, component state and data binding, and a service that loads data over HTTP.

## What it shows

- **Routing:** `/` shows the user page and `/about` the about page (`RouterModule.forRoot`).
- **Component state and binding:** `UserComponent` holds a profile (name, age, email, address and hobbies), shows it in the template, and lets you add a hobby or edit the profile.
- **HTTP service:** `DataService` uses `HttpClient` to load posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts), and the user page lists them.

## Run it

Requires Node.js and the Angular CLI 10.

```bash
npm install
ng serve
```

Then open http://localhost:4200/.

```text
src/app/
  components/user/    profile, hobbies and posts
  components/about/   about page
  Services/           DataService (HttpClient)
```

For a recent Angular project, see [nexadash](https://github.com/Ahmed-Manai/nexadash) (Angular 21, standalone components, Material 3).
