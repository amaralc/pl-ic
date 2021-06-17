import { RouteProps } from "react-router-dom";
import { Home } from "../pages/Home";
import { Labs } from "../pages/Labs";
import { Equipment } from "../pages/Equipment";

interface CustomRouteProps extends Omit<RouteProps, "component"> {
  component: React.ElementType;
  props: {
    title: string
  }
}

export const routes: CustomRouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    props: {
      title: 'Peerlab'
    }    
  },
  {
    path: '/labs',
    component: Labs,
    exact: true,
    props: {
      title: 'Peerlab | Labs'
    } 
  },
  {
    path: '/equipment',
    component: Equipment,
    exact: true,
    props: {
      title: 'Peerlab | Equipment'
    } 
  }
]