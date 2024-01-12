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
							<NavLink to="/user" style={{textDecoration: 'none', fontSize: '1.5em'}}>User</NavLink>
						</div>
						<div
							sx={{ my: 2, display: 'block', color: 'black' }}
						>
							<NavLink to="/client" style={{textDecoration: 'none', fontSize: '1.5em'}}>Client</NavLink>
						</div>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
	);
}

export default NavBar