--- Day 3: Spiral Memory ---

Part 1:
	You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

	Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:

	17  16  15  14  13
	18   5   4   3  12
	19   6   1   2  11
	20   7   8   9  10
	21  22  23---> ...
	While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square 1.

	For example:

	Data from square 1 is carried 0 steps, since it's at the access port.
	Data from square 12 is carried 3 steps, such as: down, left, left.
	Data from square 23 is carried only 2 steps: up twice.
	Data from square 1024 must be carried 31 steps.
	How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?

--- Day 4: High-Entropy Passphrases ---

Part 1:
	A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

	To ensure security, a valid passphrase must contain no duplicate words.

	For example:

	aa bb cc dd ee is valid.
	aa bb cc dd aa is not valid - the word aa appears more than once.
	aa bb cc dd aaa is valid - aa and aaa count as different words.
	The system's full passphrase list is available as your puzzle input. How many passphrases are valid?

Part 2:
	For added security, yet another system policy has been put in place. Now, a valid passphrase must contain no two words that are anagrams of each other - that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

	For example:

	abcde fghij is a valid passphrase.
	abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
	a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
	iiii oiii ooii oooi oooo is valid.
	oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
	Under this new system policy, how many passphrases are valid?