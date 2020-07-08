require 'test_helper'

class ProspectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prospect = prospects(:one)
  end

  test "should get index" do
    get prospects_url, as: :json
    assert_response :success
  end

  test "should create prospect" do
    assert_difference('Prospect.count') do
      post prospects_url, params: { prospect: { email: @prospect.email, first_name: @prospect.first_name, last_name: @prospect.last_name, phone: @prospect.phone, status: @prospect.status } }, as: :json
    end

    assert_response 201
  end

  test "should show prospect" do
    get prospect_url(@prospect), as: :json
    assert_response :success
  end

  test "should update prospect" do
    patch prospect_url(@prospect), params: { prospect: { email: @prospect.email, first_name: @prospect.first_name, last_name: @prospect.last_name, phone: @prospect.phone, status: @prospect.status } }, as: :json
    assert_response 200
  end

  test "should destroy prospect" do
    assert_difference('Prospect.count', -1) do
      delete prospect_url(@prospect), as: :json
    end

    assert_response 204
  end
end
