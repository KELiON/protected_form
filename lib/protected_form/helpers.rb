module ProtectedForm
  module Helpers
    def protected_form_for *attrs, &block
      options = attrs.extract_options!

      id = 'pf_' + SecureRandom.hex(10)

      out = content_tag(:div, :id => id + '_form', :style => 'display:none;') do
        form_for(*attrs, options.dup, &(Proc.new {}))
      end

      form_content = fields_for(*attrs, options.dup, &block)

      out << content_tag(:div, form_content, :class => options[:html][:class] + ' js-protected-form', :id => id)
      out.html_safe
    end
  end
end