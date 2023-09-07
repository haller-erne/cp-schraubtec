-- define operator level(1) rights
-- 
-- uncomment a line to add a right to the user
-- 
user_rights = {
	0x0001,  -- finish assembly processing
	--0x0002,  -- clear assembly (clear all tightening results on assembly)
	0x0004,  -- start current Job
	0x0008,  -- finish current Job processing
	--0x0010,  -- skip Job (finish current Job processing and start the next)
	--0x0020,  -- clear Job (clear all tightening results on current Job)
	--0x0040,  -- skip Operation (set current operation to NOK and start the next)
	--0x0080,  -- clear Bolt (clear tightening results on current bolt position and define it as NOT_PROCESSED)
	--0x0100,  -- start diagnostic Job
	--0x0200,  -- select Job / Bolt in view or on image
	--0x1000,   -- process NOK (continue tightening process after NOK result)
	--0x2000,  -- use the switch on the tool to activate the loosen process (CCW)
	--0x8000,  -- unmount Job
	--0x10000, -- switch between alternative and standard tool
	--0x20000  -- teach Tool position
}
