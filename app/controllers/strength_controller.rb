class StrengthController < ApplicationController
    def show
        strength = Strength.find_by(main_type: params[:id].capitalize)
        render json: strength.to_json
    end
end