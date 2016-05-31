num = [1..100]
result= ""
if num % 3 == 0
	result = result + "fizz"
elsif num % 5 == 0
	result << "Buzz"

elsif num % 3 && % 5 == 0
	result << "FizzBuzz"

else 
	print num
end