class Ingredient
  attr_reader :name, :price
  def initialize(name, price)
      @name = name
      @price = price
  end


end


class MilkShake
  def initialize
    @base_price = 3
    @ingredients = [ ]    
  end

  def add_ingredient(ingredient)
    @ingredients.push(ingredient)
  end

  def price_of_milkshake
    #Let's establish what our counter should be before we start adding ingredients into the mix
    total_price_of_milkshake = @base_price
    #Add each ingredients price to our total
    @ingredients.each do |ingredient|
      total_price_of_milkshake = total_price_of_milkshake + ingredient.price
    end
    #return  our total price to whoever called for it
     total_price_of_milkshake
  end
end


class ShackShop
	attr_reader :milkshakes
	def initialize
		@milkshakes = [ ] 
	end

	def add_milkshake (x)
		@milkshakes.push(x)
	end

	def checkout_milkshake 
		total_price = 0
		@milkshakes.each do |m|
		  total_price += m.price_of_milkshake
	    end
	    total_price
	end
end


nizars_milkshake = MilkShake.new
banana = Ingredient.new("banana", 2)
chocolate_chips = Ingredient.new("chocolate_chips", 1)
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

ro_milkshake = MilkShake.new
fresa = Ingredient.new("fresa", 6)
honey = Ingredient.new("honey", 3)
ro_milkshake.add_ingredient(fresa)
ro_milkshake.add_ingredient(honey)


shop = ShackShop.new
shop.add_milkshake(nizars_milkshake)
shop.add_milkshake(ro_milkshake)

puts shop.milkshakes

