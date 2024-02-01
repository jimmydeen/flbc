import { NavLink } from "react-router-dom"
import { Box, Toolbar, Container, AppBar, Typography } from "@mui/material"

const NavBar = ()=> {
	
	return (
		<AppBar position="static" sx={{ boxShadow: 'none', borderBottom: '1px solid black'}}>
		<Container sx={{m: 0}}>
			<Toolbar disableGutters>
				<Typography
					variant="h4"
					noWrap
					component="a"
					href="/home"
					sx={{
						display: { xs: 'none', md: 'flex' },
						textDecoration: 'none',
						mr: 4,
						fontWeight: 600
					}}
				>
					FLBC
				</Typography>
				<Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
						<div
							sx={{ my: 2, display: 'block', color: 'black' }}
						>
							<NavLink to="/createRequest" style={({ isActive, isPending, isTransitioning }) => { return {textDecoration: 'none', fontSize: '1.5em', color: isActive ? "black" : "blue"}}}>Make a Request</NavLink>
						</div>
						<div
							sx={{ my: 2, display: 'block', color: 'black' }}
						>
							<NavLink to="/client" style={({ isActive, isPending, isTransitioning }) => { return {textDecoration: 'none', fontSize: '1.5em', color: isActive ? "black" : "blue"}}}>View the Requests</NavLink>
						</div>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
	);
}

export default NavBar