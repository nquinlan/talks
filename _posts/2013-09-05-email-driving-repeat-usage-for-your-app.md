---
layout: post
title: "Email: Driving Repeat Usage for Your App"
alias:  /parse-dev-day-2013
---

{% slide 001-001 %}

> 26% of users never open an app a second time. This talk will explore customer communication and engagement through email and give examples of how to apply them in a Parse app. Learn when to use email to connect with customers (and when to use something else). See code samples that use Cloud Code and Parse modules to painlessly send and receive email, while gaining additional insight into customer interactions through email analytics.


- [Slides]({% resource_dir %}email-driving-repeat-usage-for-your-app.pdf)

This talk was originally given at [Parse Developer Day](http://parsedeveloperday.com) in San Francisco.  It's been adapted to text below.

{% slide 002-001 %}

[Hi, I'm Nick.](http://nicholasquinlan.com) I'm a Developer Evangelist for [SendGrid](http://sendgrid.com/). Before that I worked at [ethoseo internet marketing](http://www.ethoseo.com/) helping some of the world's largest brands use internet properties to better connect with their customers.

**A Note On SendGrid**: Naturally, as a SendGrid Developer Evangelist all code samples use SendGrid, however, as Parse Modules are well abstracted you can _very_ easily switch out `SendGrid.send` for another email company's method.

## Notification Styles
{% slide 007-001 %}

On a mobile platform like iOS or Android you have a wide variety of notifications methods to pick from. Which naturally leads to the question, _"Which notification style should I use?"_

To answer that, you need to know the strengths and weaknesses of each. Since I'm talking about emails, I'll tell you a little about that.

> “Today, if you want to drive retention and repeat usage, there isn't a better way to do it than email.”
> -- [Fred Wilson](http://avc.com), Union Square Ventures

### Strengths

* **Cross Platform** - Email is on every device today, meaning no matter where I am, as your user, I can get email.
* **Within Existing Workflow** - I already read my email, which means I'm not changing anything to read _your_ email.
* **Referenceable** - Email isn't ephemeral, like notifications, meaning I can go back and reference it. That's especially useful for things like receipts.
* **Preferred Channel** - A [2012 Exact Target Study](http://pages.exacttarget.com/SFF14-US) found that 77% of consumers want business communications to come through email, rather than another channel.


### Weaknesses

* **Outside Your App** - As email is outside your app, by forcing me to use email, you're forcing me to leave your app. <span class="muted">(and I may never come back)</span>
* **Cross Platform** - Being cross-platform is also a weakness for email, as you don't know what capabilities users will have when they open their email.
* **Non-Immediate** - Despite what it might feel like, I'm not always in my inbox, so if an email requires immediate action, I might not be there to take it.
* **Ignorable** - Since everyone get so much email, it's easy to ignore, and I might miss your notification.

### Key Uses

Email has several key uses, where I believe it outshines every other notification method.

<ul>
	<li>Platform Switches</li>
	<li>Receipts</li>
	<li>Messaging</li>
	<li><a href="#Onboarding.Emails">Onboarding</a></li>
	<li><a href="#Re-Engagement.Emails">Re-engagement</a></li>
</ul>

### Great Email

Knowing that email is _awesome_ is good, but to take full advantage of it you need to know what makes a "Great Email".

{% slide 020-001 %}

#### Personalization
Personalizing an email can have awesome results. However, if you personalize the wrong email you might have the wrong kind of results: <span style="color:#A30B00">negative.</span>

* [Experian found](http://bit.ly/18MIJ0j) that **transactional** emails with subject line personalization received _22% higher_ open rates.
* [MailerMail found](http://bit.ly/16AtY0l) **marketing** emails with personalized subject lines received _55% lower_ open rates.

But personalizing the subject line with a name isn't enough. It's better to personalize emails more with things like recommendations unique to the users.

#### Direct Link
When you send a user a link about an event _make sure_ to have a link in the email bring them to a page or app screen that relates _directly_ to the event.

##### How To Directly Link to Your App From An Email

As email is cross platform you need to ensure users are shown links that will get them to the right place: on mobile that means your app and on a desktop your website. **So how do you do that?**

You can use CSS to hide all mobile links on desktop devices and vice-versa for all desktop links.

Hiding mobile links is seen below:
{% codeblock lang:css %}
// By default hide all mobile elements
.mobile-only {
    display: none;
}

// Assume that everything under iPhone width is a mobile device
@media only screen and (max-width: 480px) {
	// Display mobile elements on mobile devices
    .mobile-only {
        display: block;
    }
}
{% endcodeblock %}

Once the CSS is in place you can place mobile links to your app around your email as long as they're given the class `mobile-only`:

{% codeblock lang:html %}
<a class="mobile-only" href="YourUrlScheme://coolfeature">Check out this cool feature!</a>
{% endcodeblock %}

However, there are a couple problems with that:

1. The media queries used rely on size and not actually capability, so if someone has a small window on their desktop they'll see your mobile links.
2. Media queries don't work in all mail clients, so some may still show the mobile links.

You can counteract this by doing some fancy web code. Shown below with [Parse Cloud Code](https://www.parse.com/docs/cloud_code_guide) with [Express.js](https://www.parse.com/docs/cloud_code_guide#started-webapp) loaded.

The following code that would be placed in `cloud/app.js` renders the open template (`cloud/views/open.hjs`):
{% codeblock lang:js %}
// Setup a route for "/open/:location" (e.g. "/open/YayNickQ/timeline")
app.get('/open/:location',
  function(req, res) {
    // Render the open template
    res.render('open', { location: req.params.location }, myCallback);
});
{% endcodeblock %}

The open template (`cloud/views/open.hjs`) mentioned in the snippet above is shown below. It provides some context and forwards users on to the app.
{% codeblock lang:html %}
<!-- Provide some context about the app and what's happening -->
<p>Super Cool App is Opening</p>
<p>If you don't own it please <a href="https://itunes.apple.com/us/app/myapp/id31415926">download it</a>.</p>
<script type="text/javascript">
    // Attempt to open your url scheme
    document.location.href = "YourUrlScheme://" + <%= location %>
</script>
{% endcodeblock %}

The code above could be modified to revert back to a desktop website if the user isn't forwarded in a few seconds. ex:  
`setTimeout(function () { document.location.href = + <%= desktoplocation %> }, 3000);`

Once the code is setup you can then place links to it in your email:

{% codeblock lang:html %}
<a class="mobile-only" href="http://your-custom-subdomain.parseapp.com/open/coolfeature">Check out this cool feature!</a>
{% endcodeblock %}

#### One Call To Action
Finally, to make a great email you need to ensure you only have **one** call to action, not several. That way you force users to do what you want.

## User Engagement Emails
Now that you have some understanding of good emails, it's time to apply that in emails that ensure users will re-engage with your app.

### Onboarding Emails
{% slide 030-001 %}

When a user comes to your app the first time, they have a [26% chance](www.localytics.com/blog/2011/first-impressions-matter-26-percent-of-apps-downloaded-used-just-once/) of closing it and never coming back.

By emailing them shortly after their first open you get the opportunity to remind them of your app.

When making one of these emails you need to keep in mind when your app is most useful. _Is there a time of day or year when your app is more useful? Does your app become more useful with more data?_ Email users when that condition occurs!

#### How To Onboard New Users Using Cloud Code

Once you establish what condition will be best for getting users into the app, it's relatively simple to have Parse Cloud Code send out an email when that condition is met.

Say for example your app is useful at 9:00am, you can setup an email to be sent to new users every morning by writing the cloud code below. _(Again, this requires [Express.js](https://www.parse.com/docs/cloud_code_guide#started-webapp) to be loaded.

<p class="muted">Similar code can be found in the <a href="https://www.parse.com/docs/cloud_code_guide#webhooks">Parse documentation under &#8220;Custom Webhooks&#8221;</a></p>
 
{% codeblock lang:js %}
app.post('/reengage',
  // Require basic authentication so only people/services you authorize can call your private endpoint
  express.basicAuth('USERNAME_OF_YOUR_CHOICE', 'PASSWORD_OF_YOUR_CHOICE'),
  function(req, res) {
    // Use the Parse Master Key to edit user records without being logged in
    Parse.Cloud.useMasterKey();
      // Initiate a Parse query for the Parse.User object
      var query = new Parse.Query(Parse.User);
      // Check to see if the user has been onboarded
      query.equalTo("onboarded", false);
      query.find({
        success: function(uninitiated) {
          // Loop through each non-onboarded user
          for (var i = 0; i < uninitiated.length; i++) { 
            var user = uninitiated[i];
            // Send the user an email onboarding them
            SendGrid.sendEmail({
              to: user.getEmail(),
              from: "you@example.com",
              subject: "Welcome to my app!",
              html: generateWelcomeEmailBody(user)
            });
            // Save that the user has been onboarded
            user.save({"onboarded" : true});
          }
        }
      });
    res.send();
});
{% endcodeblock %}

Once this webhook is setup, you'll need to call it every day at 9:00am. Currently ({{ page.date | date: "%Y-%m-%d" }}) Parse Cloud Code does not allow for scheduling, so you must go to an outside service for this to run.

Luckily there are several services that allow for this, a few to consider are:

* [EasyCron](http://www.easycron.com)
* [SetCronJob](https://www.setcronjob.com/)
* [CronLess](http://cronless.com/)

After picking out a service you'll give it the URL of your Parse App's Custom Webhook. Something like:  
`http://USERNAME_OF_YOUR_CHOICE:PASSWORD_OF_YOUR_CHOICE@your-subdomain.parseapp.com/onboardNewUsers`

**Note:** Pay attention to the timezone your user is in. 9am PST is 3am in Australia.

### Re-Engagement Emails

{% slide 036-001 %}

Re-Engagement is a similar ball game. Users may abandon your app after trying it, _or even_ after using it for a while. So you're left with the question: how do you get them back? Re-enegagement emails remind users of your app and prompt them to come back.

Often to get users to re-engage you'll need to show them the benefit they'll get for doing so. Many apps will show users they're missing content or friends. Others that sell products will give discounts.

#### How to Re-Engage Users with Cloud Code

Once you've decided to get users to re-engage, you need to code it.

You'll notice this code looks very similar to the onboarding code. The only difference is here you've chosen a "disengaged threshold", a point where you classify users as disengaged. You'll then need to re-engage them.

{% codeblock lang:js %}
app.post('/reengage',
  // Require basic authentication so only people/services you authorize can call your private endpoint
  express.basicAuth('USERNAME_OF_YOUR_CHOICE', 'PASSWORD_OF_YOUR_CHOICE'),
  function(req, res) {
    // Use the Parse Master Key to edit user records without being logged in
    Parse.Cloud.useMasterKey();
      // Initiate a Parse query for the Parse.User object
      var query = new Parse.Query(Parse.User);
      // Check if the user has been "rengaged already"
      // Note: You'd probably want to do something a little more advanced
      query.equalTo("reengaged", false});
      // Check if the user is "disengaged" (i.e. they haven't opened your app in over a month)
      // Note: This assumes you've setup your app to log the date to User.lastOpened whenever the app is opened
      // Also: lastMonth() is not a real function, you can make a similar function as so:
      //       http://stackoverflow.com/questions/605113/find-first-day-of-previous-month-in-javascript
      //       However, you'd probably want something a little better suited to your app.
      //       Using your analytics, you can find a time period where users disengaged from your app don't come back.
      query.lessThanOrEqualTo("lastOpened", lastMonth()});
      query.find({
        success: function(disengaged) {
          // Loop through each disengaged user
          for (var i = 0; i < disengaged.length; i++) { 
            var user = disengaged[i];
            // Send the user an email re-engaging them
            SendGrid.sendEmail({
              to: user.getEmail(),
              from: "you@example.com",
              subject: "We Haven’t Seen You In A While",
              html: generateReEngagementEmailBody(user)
            });
            // Save the user has been re-engaged to prevent spamming them
            user.save({"reengaged" : true});
          }
        }
      });
    res.send();
});
{% endcodeblock %}

Here, again, you'll need to use a cron service to trigger the webhook, daily (or whenever you decide).

## Tools
Much of engaging users is understanding them and interacting with them in the right way. For that you'll need the right tools.

[Google Analytics](http://google.com/analytics) gives awesome analytics power for apps and websites though Universal Analytics. However, GA's ToS prevents you from identifying individual users, a necessary step to reengagement. Both [MixPanel](https://mixpanel.com/) and [KissMetrics](https://www.kissmetrics.com) allow individual user tracking (and when combined with Parse User data can be quite powerful). [Vessel](http://vessel.io) gives some analytics, advanced crash reporting, and allows for AB Testing which is another way to further improve user engagement.

[Userfox](https://www.userfox.com/) is a service to  keep an eye on. They facilitate welcome emails and all sorts of other marketing strategies with minimal additional code. Currently they do not support iOS or Android. _However_, using their [API]() you could hack it to make iOS/Android work.

Finally, a plug: you should definitely [use SendGrid](http://sendgrid.com) for email.

## Demo App
<img src="{% resource_dir %}FollowAppIcon.png" style="float: right; padding: 0 0 20px 20px;"> My coworker Kunal and I created an app to give a better idea of how Parse and SendGrid interact. It's called FollowApp.

FollowApp is yet another app for exchanging contact information. However, rather than trying to substitute cards, it sends a templated email with a little information to the people you meet at events.

The app then notifies you when someone opens the email you sent.
 
FollowApp works by storing all data in Parse Objects and then sending email upon creating a new contact. It utilizes the SendGrid Events Webhook and Parse's Notification platform to notify users of received email.

You will be able to find the code on [Github](https://github.com/nquinlan/follow-app) when iOS7 comes out.

## Additional Resources

* Kunal wrote a fantastic [post on the SendGrid blog explaining Parse, Cloud Code, and the SendGrid Module](http://blog.sendgrid.com/create-an-ios-app-with-parse-platform-and-sendgrid/)
* [Parse Cloud Code Guide](https://www.parse.com/docs/cloud_code_guide)
* [Parse Cloud Code SendGrid Module Guide](https://www.parse.com/docs/cloud_modules_guide#sendgrid)