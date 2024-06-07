interface SubPage {
  name: string
  href: string
  isActive?: boolean
}

export interface Page {
  name: string
  href: string
  isActive?: boolean
  subOptions?: SubPage[]
}
