class ChangeReviewRatingToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :rating, :float
  end
end
