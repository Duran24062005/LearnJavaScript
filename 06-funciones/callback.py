def greeting(name):
    return f'hi, {name}'

def CallBackFunction(name, callback):
    return callback(name)


greet = CallBackFunction('John Doe', greeting)
print(greet)