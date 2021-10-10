require "application_system_test_case"

class ReviewsTest < ApplicationSystemTestCase
  test "add review" do
    visit root_url
    first(".space-y-3 > a").click
    click_button "button-add-review"
    assert_selector "h1", text: "What's your rating?"
    first("svg.cursor-pointer").click # click half star
    fill_in "review_comment", with: "Full of fluf"
    click_button "Submit review"
    assert_selector "h1", text: "Zero to One"
    assert_selector "#product_average_rating", text: "3.1"
    assert_text "Full of fluf"
    assert_text "Review was successfully created"
  end

  test "review without rating and comment should fail" do
    visit root_url
    first(".space-y-3 > a").click
    click_button "button-add-review"
    assert_selector "h1", text: "What's your rating?"
    click_button "Submit review"
    assert_selector "h1", text: "Zero to One"
    assert_selector "#product_average_rating", text: "4.0"
    assert_text "Review was not created"
  end
end
