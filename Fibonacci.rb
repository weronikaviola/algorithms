def fibonnaci(n)
  if n == 1
    return 1
  elsif n == 2
    return 1
  else
    nums = [1,1]
    (2..n).each do |n|
      nums[n-1] = nums[n-2] + nums[n-3]
    end
    return nums[n-1]
  end
end

def main
  number = STDIN.gets.chomp.to_i
  puts fibonnaci(number)
end

main()