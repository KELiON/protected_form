# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "protected_form/version"

Gem::Specification.new do |spec|
  spec.name          = "protected_form"
  spec.version       = ProtectedForm::VERSION
  spec.authors       = ["Alexandr Subbotin"]
  spec.email         = ["kelionweb@gmail.com"]
  spec.summary       = %q{Spam protection for rails forms}
  spec.description   = %q{Simple wrapper for `form_for` with javascript form submission with changing html structure of form.}
  spec.homepage      = "http://github.com/KELiON/protected_form"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = []
  spec.require_paths = ["lib"]
end
