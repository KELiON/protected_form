# ProtectedForm

Simple spam-protection wrapper for rails forms.

# How it works

This gem replaces your html form with html like:
   
    <form>
      <content>
    <form>

to html like

    <div style="display: none">
        <form id="pf_123123_form"></form>
    </div>
    <content id="pf_123123"></content>

and after user submits form in `<content>`, javascript inserts content into form and triggers `submit` event on form. Users see the same form, but for robots your form is empty. Profit!

## Usage

Just replace your `form_for` method to `protected_form_for` and load `protected_form.js` on page with your form.

## Installation

Add this line to your application's Gemfile:

    gem 'protected_form'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install protected_form

## Contributing

1. Fork it ( https://github.com/KELiON/protected_form/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
