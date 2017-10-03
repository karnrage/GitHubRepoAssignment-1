def print_odds():
    for num in range(1,256):
        if num%2 !=0:
            print "Number is",num 
            print "This is an odd number"
        if num%2 == 0:
            print "Number is",num 
            print "This is an even number"
print_odds()

my_list = [2,4,10,16]
# def multiply(list):
my_new_list = [i * 5 for i in my_list]
print my_new_list
