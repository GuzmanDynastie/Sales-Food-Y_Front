"use client";

import * as React from "react";

import { TabsDemo } from "@/pages/tabs-demo";

import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
} from "@/components/animate-ui/radix/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  ChevronRight,
  ChevronsUpDown,
  Command,
  ListPlus,
  ListRestart,
  Boxes,
  GalleryVerticalEnd,
  LogOut,
  LayoutTemplate,
  MoreHorizontal,
  Bean,
  Plus,
  BadgeDollarSign,
  Sprout,
  Settings,
  List,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThumbsUp } from "@/components/animate-ui/icons/thumbs-up";
import { MotionHighlightCardsHoverDemo } from "./motion-highlight-cards-hover-demo";

const DATA = {
  user: {
    name: "Emmanuel Guzman",
    email: "guzmanjrpro@gmail.com",
    avatar:
      "https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg",
  },
  teams: [
    {
      name: "Buen Sazón",
      logo: GalleryVerticalEnd,
      plan: "Gestor de ventas",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  general: [
    {
      title: "Productos",
      url: "#",
      icon: Boxes,
      isActive: true,
      add: true,
      items: [
        {
          title: "Salsas",
          url: "#",
        },
        {
          title: "Frijoles",
          url: "#",
        },
      ],
    },
    {
      title: "Ventas",
      url: "#",
      icon: BadgeDollarSign,
      items: [
        {
          title: "Mostrar ventas",
          url: "#",
        },
        {
          title: "Registrar venta",
          url: "#",
        },
      ],
    },
    {
      title: "Precio sugerido",
      url: "#",
      icon: ThumbsUp,
    },
  ],
  inventory: [
    {
      name: "Moldes",
      url: "#",
      icon: LayoutTemplate,
    },
    {
      name: "Chiles",
      url: "#",
      icon: Sprout,
    },
    {
      name: "Frijoles",
      url: "#",
      icon: Bean,
    },
  ],
};

export const RadixSidebarDemo = () => {
  const isMobile = useIsMobile();
  const [activeTeam, setActiveTeam] = React.useState(DATA.teams[0]);

  if (!activeTeam) return null;

  return (
    <div>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            {/* Team Switcher */}
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <activeTeam.logo className="size-4" />
                      </div>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <br />
                        <span
                          className=" font-bold"
                          style={{ fontSize: "20px", fontFamily: "fantasy" }}
                        >
                          {activeTeam.name}
                        </span>

                        {/* <span className="font-medium text-muted-foreground">
                        {activeTeam.plan}
                      </span> */}
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    align="start"
                    side={isMobile ? "bottom" : "right"}
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                      Teams
                    </DropdownMenuLabel>
                    {DATA.teams.map((team, index) => (
                      <DropdownMenuItem
                        key={team.name}
                        onClick={() => setActiveTeam(team)}
                        className="gap-2 p-2"
                      >
                        <div className="flex size-6 items-center justify-center rounded-sm border">
                          <team.logo className="size-4 shrink-0" />
                        </div>
                        {team.name}
                        <DropdownMenuShortcut>
                          ⌘{index + 1}
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 p-2">
                      <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                        <Plus className="size-4" />
                      </div>
                      <div className="font-medium text-muted-foreground">
                        Add team
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
            {/* Team Switcher */}
          </SidebarHeader>

          <SidebarContent>
            {/* Nav General */}
            <SidebarGroup>
              <SidebarGroupLabel>General</SidebarGroupLabel>
              <SidebarMenu>
                {DATA.general.map((item) => (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="font-medium text-muted-foreground"
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span className="font-medium text-muted-foreground">
                                    {subItem.title}
                                  </span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}

                          {item.add && (
                            <div>
                              <DropdownMenuSeparator />
                              <SidebarMenuItem>
                                <SidebarMenuButton className="text-sidebar-foreground/70">
                                  <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                    <Plus className="size-4" />
                                  </div>
                                  <div className="font-medium text-muted-foreground">
                                    Agregar producto
                                  </div>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </div>
                          )}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            {/* Nav General */}

            {/* Nav Inventary */}
            <SidebarGroup className="group-data-[collapsible=icon]:hidden">
              <SidebarGroupLabel>Inventario</SidebarGroupLabel>
              <SidebarMenu>
                {DATA.inventory.map((item) => (
                  <SidebarMenuItem
                    key={item.name}
                    className="font-medium text-muted-foreground"
                  >
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction showOnHover>
                          <MoreHorizontal />
                          <span className="sr-only">More</span>
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-48 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align={isMobile ? "end" : "start"}
                      >
                        <DropdownMenuItem>
                          <List className="text-muted-foreground" />
                          <span className="font-medium text-muted-foreground">
                            Mostrar
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ListPlus className="text-muted-foreground" />
                          <span className="font-medium text-muted-foreground">
                            Crear
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <ListRestart className="text-muted-foreground" />
                          <span className="font-medium text-muted-foreground">
                            Actualizar
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}

                <SidebarMenuItem>
                  <SidebarMenuButton className="text-sidebar-foreground/70">
                    <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                      <Plus className="size-4" />
                    </div>
                    <div className="font-medium text-muted-foreground">
                      Agregar inventario
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            {/* Nav Inventary */}
          </SidebarContent>

          <SidebarFooter>
            {/* Nav User */}
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={DATA.user.avatar}
                          alt={DATA.user.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {DATA.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {DATA.user.email}
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage
                            src={DATA.user.avatar}
                            alt={DATA.user.name}
                          />
                          <AvatarFallback className="rounded-lg">
                            CN
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">
                            {DATA.user.name}
                          </span>
                          <span className="truncate text-xs">
                            {DATA.user.email}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="font-medium text-muted-foreground">
                        <Settings />
                        Configurar cuenta
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="font-medium text-muted-foreground">
                        <BadgeCheck />
                        Administrador
                      </DropdownMenuItem>
                      <DropdownMenuItem className="font-medium text-muted-foreground">
                        <Bell />
                        Notificationes
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="font-medium text-muted-foreground">
                      <LogOut />
                      Cerrar sesion
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
            {/* Nav User */}
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              {/* <HighlightText
                className="text-4xl font-semibold"
                text="Gestor de ventas"
              /> */}
            </div>
          </header>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="aspect-square rounded-4xl bg-muted/50">
                <img
                  src="/BS.jpeg"
                  alt=""
                  className="aspect-square rounded-4xl bg-muted/50"
                  style={{ objectFit: "unset" }}
                />
              </div>
              <MotionHighlightCardsHoverDemo />
            </div>
          </div>

          <div className="grid auto-rows-min gap-4">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <TabsDemo />
            </div>
          </div>


        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
