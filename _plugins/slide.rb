module Jekyll
  class SlideTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
      @markup = markup
    end

    def render(context)
      # Load Jekyll Context
      site = context.registers[:site]
      page = context.registers[:page]

      # Get Site Root
      root = site.config['root']
      # Get Filename
      path = /^_posts\/(.+)\.\w+$/.match(page['path'])[1]

      # Parse Liquid Options
      options = @markup.split
      number = options.shift
      

      "<div class=\"wide slide-container\"><img src=\"#{root}resources/#{path}/slides/s/slide.#{number}.png\" " + options.join(" ") + " ></div>"
    end
  end
end

Liquid::Template.register_tag('slide', Jekyll::SlideTag)