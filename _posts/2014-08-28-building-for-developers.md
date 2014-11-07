---
layout: post
title: "Building for Developers"
alias: /building-for-developers
styled: true
---

{% slide 001-001 %}

## Increasing the Awesome in Your Open Source or API Platform

> Every day we use developer tools and might even create a few. API companies are one of the “exciting new things” in The Valley and libraries are being built and open sourced like crazy. However, creating a developer tool can be hard. It requires a lot of thought be put into API design, documentation, and more. After building one you must put a great deal of time into maintaining it, making architectural decisions, and managing its community.
>
> This talk explores some best practices in creating and maintaining developer tools, discovered through the creation and maintenance of open source libraries and put into action at major API companies. It will discuss common pitfalls in developer tools and uncover methods to sustainably develop libraries and APIs.

- [Slides]({% resource_dir %}building-for-developers.pdf)

This talk was originally given at the [devLink](http://devlink.net/) in Chattanooga, TN.

{% slide 003-001 %}

[Hi, I'm Nick.](http://nicholasquinlan.com) I'm a Developer Evangelist for [SendGrid](https://sendgrid.com/). In my role as an evangelist I spend a lot of time with developers, helping them build their applications and work through any issues they may be having. This leads to me helping developers integrate with lots of APIs and use many open source libraries. In doing so, I've seen a lot of good strategies put in place to make developers lives easier.

{% slide 004-001 %}

Like I said, I work for [SendGrid](https://sendgrid.com/), we're a API company that's been around for just over five years. In that time we've had our share of ups-and-downs and growing pains. I'm sharing parts of our story with you in the hopes that its helpful to see the growth of an API company.

{% slide 007-001 %}

## API, Docs & Client Libraries

As an API company there are a number of things that we need to pay special attention to:

- **API** - Of course, the first is our API. We need to ensure its easy to use, consistent, well maintained, and works as expected.
- **Docs** - To use any API, you really need documentation about it. We need to make sure our docs are clear, consistent, and make using the API a breeze.
- **Client Libraries** - Client libraries help our users to get started faster than anything else and not worry about "endpoints" or authentication methods.

I'll go through each one of these to explain what we've done and are doing to ensure we create a good experience.

{% slide 008-001 %}

Our API is fairly expansive and has evolved a lot over the years. We have three major parts to our API:

- **The [SMTPAPI](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html)** - A confusingly named JSON document that extends email sent over SMTP _or_ Web.
- **The [Web API](https://sendgrid.com/docs/API_Reference/Web_API/index.html)** - A fairly standard, although not fully RESTful API.
- **[Webhooks](https://sendgrid.com/docs/API_Reference/Webhooks/index.html)** - Two "reverse APIs" to provide real-time data on [email events](https://sendgrid.com/docs/API_Reference/Webhooks/event.html) and [inbound email](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

{% slide 011-001 %}

### The SMTPAPI
The SMTPAPI hasn't changed much over the years, however at SendGrid, we're going through _our entire_ infrastructure and rewriting almost everything in Golang. As such the SMTPAPI is changing behind the scenes, but not much for users.

{% slide 019-001 %}

### Web API
Our Web API started out as a big Symfony app written during Techstars. Because it was an earli<em>er</em> Web API, it doesn't follow many API Best Practices and has some weird features.

However, we're revamping it! Now it's following a whole lot of best practices and really creating a much, much better experience for our users.

More than that, we're looking to have our developer relations team mantain it.


## Links
Several links are given over the course of the talk. They are presented here for easier clicking.

- [**Cheat Codes for Good Documentation**](http://sendgrid.com/blog/cheat-codes-for-good-documentation/) by Brandon West
- [**Creating Sustainable Documentation with Jekyll**](http://sendgrid.com/blog/creating-sustainable-documentation-with-jekyll/) by Brandon West
- [**The Fans Are All Right**](https://blog.pinboard.in/2011/10/the_fans_are_all_right/) by Maciej Cegłowski
