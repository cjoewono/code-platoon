def bottle_song(num):
    for x in range(num, -1,-1):
        if x != 1:
            current_word = "bottles"
        else:
            current_word = "bottle"
        print(f"{x} {current_word} of beer on the wall, {x} {current_word} of beer.")
        next_x = x - 1
        if next_x == 1:
            next_word = "1 bottle"
        elif next_x == 0:
            next_word = "no more bottles"
        else:
            next_word = f"{next_x} bottles"
        print(f"Take one down and pass it around, {next_word} of beer on the wall.")
        print("")
    print("No more bottles of beer on the wall, no more bottles of beer.")
    print(f"Go to the store and buy some more, {num} bottles of beer on the wall.")

bottle_song(50)

####kldjsfalkfdajalskdfjdfls