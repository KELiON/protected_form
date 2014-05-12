require 'action_view'
require "protected_form/version"
require "protected_form/helpers"
require "protected_form/engine"

module ProtectedForm
end

ActiveSupport.on_load(:action_view) do
  include ProtectedForm::Helpers
end