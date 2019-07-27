def euclidean(*args)
  if args.include?(0)
    puts "GCD is #{args.max}"
  else
    smaller = args.min
    greater = args.max - smaller
    euclidean(smaller, greater)
  end
end

def main
  puts "first number"
  first = gets.chomp.to_i
  puts "enter second number"
  second = gets.chomp.to_i
  euclidean(first, second)
end

main()