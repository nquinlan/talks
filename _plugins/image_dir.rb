module Jekyll
  class ImageDir < Liquid::Tag

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
      

      "#{root}resources/#{path}/"
    end
  end
end

Liquid::Template.register_tag('resource_dir', Jekyll::ImageDir)