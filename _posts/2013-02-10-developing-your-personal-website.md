---
layout: post
title: "Developing Your Personal Website"
alias:  /MISA
styled: true
---

{% slide 001-001 %}

> Today, to be taken seriously in tech, you need to have a website. Building a website for yourself is a great way to build your personal brand and differentiate yourself from amongst other candidates when applying for future jobs. Learn how to make your own and even use WordPress to create a website _during_ the workshop.

- [Slides]({% resource_dir %}developing-your-personal-website.pdf)

This workshop was originally given in Bellingham, WA for [The Management Information Systems Association of Western Washington University](http://yorktown.cbe.wwu.edu/clubs/misa/). You may view the [slides]({% resource_dir %}developing-your-personal-website.pdf) and additional information given after the workshop.

## More…

Unfortunately, there was a lot I was unable to cover in my presentation,
hopefully this can act as a supplement to it.

**Note:** Some of my recommendations here have what are known as "affiliate links" attached to them, which means I get paid if you start
using the service. That's because I'm a business major, and not because I wouldn't recommend the service myself. If for whatever reason, you don't want to have me receive compensation, <a id="aff-off" href="javascript:">you can turn  off all affiliate links</a>.

### More on Domain Names

#### Acquiring a Domain

Choosing a domain name can be tough. I own three that are just variations of my name. Keep in mind when purchasing:

-   Sites with a `.com` extension tend to be better respected than any
    other extension.
-   Try the shortest variation of your name first. If you can get your
    last name, **buy it!**
-   Random jumbles of characters are impossible to remember. Don't just
    go for shortness.
-   Long domains make people less likely to type them out.

My favorite place to go when exploring domain buying options is [domai.nr](http://domai.nr) which will show you if the name your trying for is taken and if there are any variations that might work.

When it comes time to purchase, I recommend <a href="http://ref.name.com/aff_c?offer_id=3&amp;aff_id=1953" data-aff-off="http://name.com" class="aff-on">Name.com</a>, but [NameCheap](http://namecheap.com) is another great option.

#### After Purchase

Once you have your domain, you’ll need to make it do what you want. By default your domain will go to a page of ads. To have it show your content, you’ll need to "point the DNS". This will be explained to you by whomever is asking you for it. **Make sure when you change the DNS, you delete the old settings.**

### More on Content Management Systems

Most of the CMSes I described have setup processes that are well explained. Below are the ones that are not.

#### WordPress.org

Truly, to set up WordPress, there are three things you need:

1.  A Domain Name
2.  A Host
3.  A Theme

##### Domain Name

You **need** a domain name. Personally, I recommend <a href="http://ref.name.com/aff_c?offer_id=3&amp;aff_id=1953" data-aff-off="http://name.com" class="aff-on">Name.com</a>, but [NameCheap](http://namecheap.com) is another great option.

##### Host

Choosing a host is an incredibly hard decision and most review sites are
pretty biased. My personal recommendation depends on what the site is
going to be used for, how much you’re going to use it, and how technical
you are.

-   **Low Traffic / Low Use: [FreeHostia](http://freehostia.com)**

    FreeHostia provides *free* hosting from their "Chocolate" plan all they require is for you to have a domain name. I used their service for a few *very* small personal projects. However, they put heavy restrictions on your account. I would not recommend them if you think you’ll have more than fifty visitors a day or need more than 250mb of space.

-   **Higher Traffic / No High Tech Needs: <a href="http://www.ipage.com/join/index.bml?AffID=647476" data-aff-off="http://www.ipage.com/" class="aff-on">iPage</a>**

    iPage can support higher traffic and provides decent support. I recommend them to all my non-technical clients. Their services works great unless you need to get fairly technical.

    My friend’s [app’s site](http://getfinish.com/) is a good example of something hosted on iPage. It got a good deal of traffic when it launched and did not faulter.

-   **Higher Traffic / High Tech Needs: <a href="http://ref.webhostinghub.com/scripts/click.php?ref_id=nquinlan&ad_id=0261610f" data-aff-off="http://webhostinghub.com/" class="aff-on">WebHostingHub</a>**

    WebHostingHub is who I use for my basic websites. They provide more technical tools (e.g. cPanel and cron jobs) but are also more expensive.

    I’ve had few problems with their service while hosted with them and they do a great job of supporting the things I create. They didn’t falter when I directed more than 400 visitors a minute to them with [AppleMadeMoreMoneyThan.com](http://AppleMadeMoreMoneyThan.com). You’ve likely seen them at work as [Drunk WWU](http://drunkwwu.com/)
    is hosted with them.

Once you have a host installing WordPress is a snap, they all have one-click-installs available, but if you prefer to do it as I
demonstrated you can use my [download/unzip script for WordPress](http://thisishowyoumakeawebsite.com/MISA/download/wordpress-downloader.php).

##### Themes

There are a bunch of *awesome* free WordPress themes out there, you just need to do some digging. The [WordPress Theme Repository](http://wordpress.org/extend/themes/) has almost 1,700 free themes, the newer ones are of high quality, although many aren’t so great. You can also try searching Google for [`smashing mag best free wordpress themes`](http://google.com/search?q=smashing+mag+best+free+wordpress+themes). If you don’t want to dig through free themes, there are also paid themes. <a href="http://themeforest.net/category/wordpress/?ref=nquinlan" data-aff-off="http://themeforest.net/category/wordpress/" class="aff-on">ThemeForest</a> provides many awesome themes for pretty low prices ($25–40). [WooThemes](http://www.woothemes.com/product-category/themes/), has
*very high quality* themes for higher prices, they even have [a few free ones](http://www.woothemes.com/product-category/themes/?prod_cat%5B%5D=100&s=&post_type=product).

<script type="text/javascript">
window.onload = function () {
  $(function() {
		$("#aff-off").on("click keypress", function () {
			$(this).addClass("aff-off");
			$(".aff-on").each(function () {
				$(this).attr("href", $(this).attr("data-aff-off") );
				$(this).addClass("aff-off");
			});
		});
	});
};
</script>
