from v_wallet import sendTransaction

# Number of trans
trans = 100

txts = [sendTransaction() for _ in range(trans)]

# Print out the txt
for i, txt in enumerate(txts):
    print(f"txt {i+1}:")
    print("Result:", txt.result)
    print()