# def say_hi(name):
#     print "Hi," + name
# say_hi("Catalina")

def multiply(arr,num):
    print arr, num
    for x in arr:
        x *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b