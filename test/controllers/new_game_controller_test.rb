require 'test_helper'

class NewGameControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
