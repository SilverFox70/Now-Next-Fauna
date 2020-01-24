# Demo of Zeit Now, Next.js, and FaunaDB

This is based on the tutorial provided by Zeit [here](https://zeit.co/guides/deploying-nextjs-nodejs-and-faunadb-with-zeit-now). Running through the instructions I found a couple of issues worht noting. Details are provided below.

## Adding Styles

The tutorial helpfully links to a stylesheet, but then fails to explain _exactly how_ to use these styles in a Now/Next sort of way. After perusing some examples from other Now tutorials, I arrived at using the `<style jsx>` tag and placing the appropriate styles in both `pages/index.js` and `components/TableRow.js`. There are other ways of handling styles in Next, but this was my "quick and dirty" solution.

## Environment Variables and Secrets

Put simply, following the directions as written did not work. When I deployed, the secrets didn't get passed up and I could not authorize to access FaunaDB. Moreover, I couldn't access the environment variables running either `next` or `now dev` from the **cli**. 

**Here's what I learned...**

### Deploying

With regard to [Serverless Function Environment Variables and Secrets](https://zeit.co/docs/v2/serverless-functions/env-and-secrets) you do indeed need a `now.json` file like this:

``` JSON
{
  "env": {
    "FAUNADB_SECRET_KEY": "@faunadb_secret_key"
  }
}
```

> NOTE: the '@' symbol is important is must always prefix the variable name.

This will allow you to have access to the values when you deploy, but will not work for local build or development. And even still, you should deploy passing the value up explicitly like this:

``` bash
now -e FAUNADB_SECRET_KEY=@faunadb_secret_key
```

### Building

Assimung that you have already added your **now** secrets properly we can add some lines to our `now.json` file for our build process.

``` JSON
{
  "env": {
    "FAUNADB_SECRET_KEY": "@faunadb_secret_key"
  },
  "build": {
    "env": {
      "FAUNADB_SECRET_KEY": "@faunadb_secret_key"
    }
  }
}
```

Looking at it, it makes sense and you can cleary see which secrets will be used for 'production' versus a local build. The reasoning is that this is safer than assuming we should use production secrets when doing local builds or development, and you can't really argue with that.


### Local Development

For those times when you want to use `now dev` and have access to all of your environment variables you'll need to create a `.env.build` file at the root of your project like you see below:

```
FAUNADB_SECRET_KEY=<the-secret-key>
``` 

The reasoning for this separate file is that this is safer than assuming we should use production secrets when doing local builds or development, and you can't really argue with that.

Check out the docs [here](https://zeit.co/docs/v2/build-step#defining-a-build-script) for more details on Build and Local Development variables.



