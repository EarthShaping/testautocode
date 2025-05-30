export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_assistant_profile: {
        Row: {
          assistant_id: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          updated_at: string
          voice_id: string | null
        }
        Insert: {
          assistant_id: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          updated_at?: string
          voice_id?: string | null
        }
        Update: {
          assistant_id?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          updated_at?: string
          voice_id?: string | null
        }
        Relationships: []
      }
      app_version: {
        Row: {
          created_at: string
          date: string | null
          id: number
          major: number | null
          minor: number | null
          notes: string | null
          patch: number | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: number
          major?: number | null
          minor?: number | null
          notes?: string | null
          patch?: number | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: number
          major?: number | null
          minor?: number | null
          notes?: string | null
          patch?: number | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          booking_date: string
          booking_end_time: string
          booking_time: string
          cancellation_note: string | null
          created_at: string
          deal_id: string
          discount_percentage: number
          discounted_price: number
          fake: boolean
          id: string
          original_price: number
          qr_data: Json
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          booking_date: string
          booking_end_time?: string
          booking_time: string
          cancellation_note?: string | null
          created_at?: string
          deal_id: string
          discount_percentage: number
          discounted_price: number
          fake?: boolean
          id?: string
          original_price: number
          qr_data: Json
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          booking_date?: string
          booking_end_time?: string
          booking_time?: string
          cancellation_note?: string | null
          created_at?: string
          deal_id?: string
          discount_percentage?: number
          discounted_price?: number
          fake?: boolean
          id?: string
          original_price?: number
          qr_data?: Json
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals_with_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      business_products: {
        Row: {
          business_id: string
          category: string | null
          created_at: string
          description: string | null
          id: string
          images: string[] | null
          is_available: boolean | null
          name: string
          price: number | null
          sku: string | null
          stock_quantity: number | null
          updated_at: string
        }
        Insert: {
          business_id: string
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          name: string
          price?: number | null
          sku?: string | null
          stock_quantity?: number | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          name?: string
          price?: number | null
          sku?: string | null
          stock_quantity?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string | null
          category_id: string | null
          city: string | null
          compliance_notes: string | null
          country: string | null
          created_at: string
          description: string | null
          email: string | null
          fake: boolean
          geom: unknown | null
          id: string
          latitude: number | null
          legal_structure: string | null
          longitude: number | null
          name: string
          owner_id: string | null
          phone: string | null
          photos: string[] | null
          registration_number: string | null
          state: string | null
          tax_id: string | null
          updated_at: string
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          category_id?: string | null
          city?: string | null
          compliance_notes?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          fake?: boolean
          geom?: unknown | null
          id?: string
          latitude?: number | null
          legal_structure?: string | null
          longitude?: number | null
          name: string
          owner_id?: string | null
          phone?: string | null
          photos?: string[] | null
          registration_number?: string | null
          state?: string | null
          tax_id?: string | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          category_id?: string | null
          city?: string | null
          compliance_notes?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          fake?: boolean
          geom?: unknown | null
          id?: string
          latitude?: number | null
          legal_structure?: string | null
          longitude?: number | null
          name?: string
          owner_id?: string | null
          phone?: string | null
          photos?: string[] | null
          registration_number?: string | null
          state?: string | null
          tax_id?: string | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businesses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          joined_at: string
          role: Database["public"]["Enums"]["conversation_role"]
          user_id: string
        }
        Insert: {
          conversation_id: string
          joined_at?: string
          role: Database["public"]["Enums"]["conversation_role"]
          user_id: string
        }
        Update: {
          conversation_id?: string
          joined_at?: string
          role?: Database["public"]["Enums"]["conversation_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          booking_id: string | null
          business_id: string
          created_at: string
          created_by: string
          deal_id: string | null
          id: string
          is_active: boolean
          last_message_at: string
          type: string
          updated_at: string
        }
        Insert: {
          booking_id?: string | null
          business_id: string
          created_at?: string
          created_by: string
          deal_id?: string | null
          id?: string
          is_active?: boolean
          last_message_at?: string
          type: string
          updated_at?: string
        }
        Update: {
          booking_id?: string | null
          business_id?: string
          created_at?: string
          created_by?: string
          deal_id?: string | null
          id?: string
          is_active?: boolean
          last_message_at?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["booking_id"]
          },
          {
            foreignKeyName: "conversations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals_with_info"
            referencedColumns: ["id"]
          },
        ]
      }
      dashboard_configurations: {
        Row: {
          business_id: string
          config: Json
          created_at: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          business_id: string
          config?: Json
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          config?: Json
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dashboard_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dashboard_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dashboard_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
        ]
      }
      deals: {
        Row: {
          auto_confirm: boolean
          business_id: string
          category_id: string | null
          created_at: string
          description: string | null
          discount_percentage: number | null
          discounted_price: number
          end_date: string
          fake: boolean
          id: string
          images: string[] | null
          original_price: number
          start_date: string
          status: Database["public"]["Enums"]["deal_status_enum"]
          terms_conditions: string
          time_slots: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          auto_confirm?: boolean
          business_id: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          discounted_price: number
          end_date: string
          fake?: boolean
          id?: string
          images?: string[] | null
          original_price: number
          start_date: string
          status?: Database["public"]["Enums"]["deal_status_enum"]
          terms_conditions?: string
          time_slots?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          auto_confirm?: boolean
          business_id?: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          discounted_price?: number
          end_date?: string
          fake?: boolean
          id?: string
          images?: string[] | null
          original_price?: number
          start_date?: string
          status?: Database["public"]["Enums"]["deal_status_enum"]
          terms_conditions?: string
          time_slots?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "deals_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      document_embeddings: {
        Row: {
          content: string
          created_at: string
          embedding: string
          id: number
          metadata: Json
          version: number
        }
        Insert: {
          content: string
          created_at?: string
          embedding: string
          id?: number
          metadata: Json
          version?: number
        }
        Update: {
          content?: string
          created_at?: string
          embedding?: string
          id?: number
          metadata?: Json
          version?: number
        }
        Relationships: []
      }
      documents: {
        Row: {
          business_id: string
          created_at: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
        ]
      }
      globalsetting: {
        Row: {
          created_at: string
          demo_location: Json | null
          fallback_location: Json | null
          id: number
          map_demo: boolean | null
        }
        Insert: {
          created_at?: string
          demo_location?: Json | null
          fallback_location?: Json | null
          id?: number
          map_demo?: boolean | null
        }
        Update: {
          created_at?: string
          demo_location?: Json | null
          fallback_location?: Json | null
          id?: number
          map_demo?: boolean | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          Address: string | null
          Categories: Json | null
          Category: string | null
          created_at: string
          discords: string | null
          Email: string | null
          facebooks: string | null
          id: number
          image_url: string | null
          instagrams: string | null
          Latitude: string | null
          linkedIns: string | null
          loaded: boolean
          Longitude: string | null
          mapsUrl: string | null
          Name: string | null
          Operating_Hours: string | null
          Phone: string | null
          pinterests: string | null
          Rating: string | null
          Review: string | null
          tiktoks: string | null
          twitters: string | null
          Website: string | null
          youtubes: string | null
        }
        Insert: {
          Address?: string | null
          Categories?: Json | null
          Category?: string | null
          created_at?: string
          discords?: string | null
          Email?: string | null
          facebooks?: string | null
          id?: number
          image_url?: string | null
          instagrams?: string | null
          Latitude?: string | null
          linkedIns?: string | null
          loaded?: boolean
          Longitude?: string | null
          mapsUrl?: string | null
          Name?: string | null
          Operating_Hours?: string | null
          Phone?: string | null
          pinterests?: string | null
          Rating?: string | null
          Review?: string | null
          tiktoks?: string | null
          twitters?: string | null
          Website?: string | null
          youtubes?: string | null
        }
        Update: {
          Address?: string | null
          Categories?: Json | null
          Category?: string | null
          created_at?: string
          discords?: string | null
          Email?: string | null
          facebooks?: string | null
          id?: number
          image_url?: string | null
          instagrams?: string | null
          Latitude?: string | null
          linkedIns?: string | null
          loaded?: boolean
          Longitude?: string | null
          mapsUrl?: string | null
          Name?: string | null
          Operating_Hours?: string | null
          Phone?: string | null
          pinterests?: string | null
          Rating?: string | null
          Review?: string | null
          tiktoks?: string | null
          twitters?: string | null
          Website?: string | null
          youtubes?: string | null
        }
        Relationships: []
      }
      ln_canvases: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          name: string
          project_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string
          project_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string
          project_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ln_canvases_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_canvases_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "ln_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_items: {
        Row: {
          content: string | null
          created_at: string
          custom_color: string | null
          details: string | null
          id: string
          order_num: number
          position_x: number | null
          position_y: number | null
          section_id: string | null
          updated_at: string
          z_index: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          custom_color?: string | null
          details?: string | null
          id?: string
          order_num: number
          position_x?: number | null
          position_y?: number | null
          section_id?: string | null
          updated_at?: string
          z_index?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          custom_color?: string | null
          details?: string | null
          id?: string
          order_num?: number
          position_x?: number | null
          position_y?: number | null
          section_id?: string | null
          updated_at?: string
          z_index?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_items_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "ln_canvas_with_sections"
            referencedColumns: ["section_id"]
          },
          {
            foreignKeyName: "ln_items_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "ln_sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_items_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "ln_sections_with_items"
            referencedColumns: ["section_id"]
          },
        ]
      }
      ln_projects: {
        Row: {
          context: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          mission: string | null
          name: string
          team_id: string
          updated_at: string
          values: Json | null
          vision: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          mission?: string | null
          name: string
          team_id: string
          updated_at?: string
          values?: Json | null
          vision?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          mission?: string | null
          name?: string
          team_id?: string
          updated_at?: string
          values?: Json | null
          vision?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_projects_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_team_owners"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ln_projects_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_sections: {
        Row: {
          canvas_id: string | null
          color: string
          created_at: string
          description: string | null
          id: string
          order_num: number
          section_key: string
          title: string
          updated_at: string
        }
        Insert: {
          canvas_id?: string | null
          color: string
          created_at?: string
          description?: string | null
          id?: string
          order_num: number
          section_key: string
          title: string
          updated_at?: string
        }
        Update: {
          canvas_id?: string | null
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          order_num?: number
          section_key?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id"]
            isOneToOne: false
            referencedRelation: "ln_canvas_with_sections"
            referencedColumns: ["canvas_id"]
          },
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id"]
            isOneToOne: false
            referencedRelation: "ln_canvases"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_team_members: {
        Row: {
          created_at: string
          id: string
          role: string
          team_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: string
          team_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          team_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ln_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_team_owners"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ln_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_teams: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ln_teams_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_teams_created_by_fkey1"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_teams_created_by_fkey1"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_teams_created_by_fkey1"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          read_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      sv_answers: {
        Row: {
          created_at: string
          field_id: string
          id: string
          response_id: string
          value: string | null
          value_json: Json | null
        }
        Insert: {
          created_at?: string
          field_id: string
          id?: string
          response_id: string
          value?: string | null
          value_json?: Json | null
        }
        Update: {
          created_at?: string
          field_id?: string
          id?: string
          response_id?: string
          value?: string | null
          value_json?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "sv_answers_field_id_fkey"
            columns: ["field_id"]
            isOneToOne: false
            referencedRelation: "sv_fields"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sv_answers_response_id_fkey"
            columns: ["response_id"]
            isOneToOne: false
            referencedRelation: "sv_responses"
            referencedColumns: ["id"]
          },
        ]
      }
      sv_fields: {
        Row: {
          created_at: string
          description: string | null
          id: string
          max: number | null
          min: number | null
          options: Json | null
          order_index: number
          placeholder: string | null
          question: string
          required: boolean
          section_id: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          max?: number | null
          min?: number | null
          options?: Json | null
          order_index?: number
          placeholder?: string | null
          question: string
          required?: boolean
          section_id: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          max?: number | null
          min?: number | null
          options?: Json | null
          order_index?: number
          placeholder?: string | null
          question?: string
          required?: boolean
          section_id?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sv_fields_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sv_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      sv_responses: {
        Row: {
          completed_at: string | null
          id: string
          metadata: Json | null
          respondent_email: string | null
          respondent_id: string | null
          respondent_ip: string | null
          started_at: string
          survey_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          metadata?: Json | null
          respondent_email?: string | null
          respondent_id?: string | null
          respondent_ip?: string | null
          started_at?: string
          survey_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          metadata?: Json | null
          respondent_email?: string | null
          respondent_id?: string | null
          respondent_ip?: string | null
          started_at?: string
          survey_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sv_responses_respondent_id_fkey"
            columns: ["respondent_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sv_responses_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "sv_surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      sv_sections: {
        Row: {
          created_at: string
          description: string | null
          id: string
          order_index: number
          survey_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          order_index?: number
          survey_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          order_index?: number
          survey_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sv_sections_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "sv_surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      sv_surveys: {
        Row: {
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          published: boolean
          share_link: string | null
          start_date: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          published?: boolean
          share_link?: string | null
          start_date?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          published?: boolean
          share_link?: string | null
          start_date?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sv_surveys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      sv_template_categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          goal: string
          id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          goal: string
          id?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          goal?: string
          id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sv_templates: {
        Row: {
          created_at: string | null
          goal: string
          id: string
          options: Json | null
          template_data: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          goal: string
          id?: string
          options?: Json | null
          template_data: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          goal?: string
          id?: string
          options?: Json | null
          template_data?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      time_slot_bookings: {
        Row: {
          booked_seats: number
          booking_date: string | null
          booking_id: string
          created_at: string
          day_of_week: number
          deal_id: string
          end_time: string
          fake: boolean
          id: string
          start_time: string
        }
        Insert: {
          booked_seats?: number
          booking_date?: string | null
          booking_id: string
          created_at?: string
          day_of_week: number
          deal_id: string
          end_time: string
          fake?: boolean
          id?: string
          start_time: string
        }
        Update: {
          booked_seats?: number
          booking_date?: string | null
          booking_id?: string
          created_at?: string
          day_of_week?: number
          deal_id?: string
          end_time?: string
          fake?: boolean
          id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_slot_bookings_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["booking_id"]
          },
          {
            foreignKeyName: "time_slot_bookings_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_slot_bookings_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_slot_bookings_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals_with_info"
            referencedColumns: ["id"]
          },
        ]
      }
      user_deal_interactions: {
        Row: {
          count: number | null
          created_at: string
          deal_id: string
          id: string
          interaction_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          count?: number | null
          created_at?: string
          deal_id: string
          id?: string
          interaction_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          count?: number | null
          created_at?: string
          deal_id?: string
          id?: string
          interaction_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_deal_interactions_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_deal_interactions_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals_with_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_deal_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_deal_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_deal_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      user_details: {
        Row: {
          avatar_url: string | null
          business_mode: boolean
          created_at: string
          default_business_id: string | null
          display_name: string | null
          email: string | null
          fake: boolean
          favorite_deals: Json | null
          first_name: string | null
          id: string
          last_name: string | null
          location_enabled: boolean
          onboarding_completed: boolean
          phone_number: string | null
          recently_viewed_deals: Json | null
          selected_assistant_id: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          business_mode?: boolean
          created_at?: string
          default_business_id?: string | null
          display_name?: string | null
          email?: string | null
          fake?: boolean
          favorite_deals?: Json | null
          first_name?: string | null
          id: string
          last_name?: string | null
          location_enabled?: boolean
          onboarding_completed?: boolean
          phone_number?: string | null
          recently_viewed_deals?: Json | null
          selected_assistant_id?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          business_mode?: boolean
          created_at?: string
          default_business_id?: string | null
          display_name?: string | null
          email?: string | null
          fake?: boolean
          favorite_deals?: Json | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          location_enabled?: boolean
          onboarding_completed?: boolean
          phone_number?: string | null
          recently_viewed_deals?: Json | null
          selected_assistant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "user_details_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_selected_assistant_id_fkey"
            columns: ["selected_assistant_id"]
            isOneToOne: false
            referencedRelation: "ai_assistant_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          categories: string[] | null
          created_at: string | null
          id: string
          notification_preferences: Json | null
          onboarding_completed: boolean | null
          price_range: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          categories?: string[] | null
          created_at?: string | null
          id?: string
          notification_preferences?: Json | null
          onboarding_completed?: boolean | null
          price_range?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          categories?: string[] | null
          created_at?: string | null
          id?: string
          notification_preferences?: Json | null
          onboarding_completed?: boolean | null
          price_range?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      booking_with_all_details: {
        Row: {
          booking_date: string | null
          booking_id: string | null
          booking_time: string | null
          business_address: string | null
          business_name: string | null
          deal_description: string | null
          deal_title: string | null
          email: string | null
          fake: boolean | null
          first_name: string | null
          last_name: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_details_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses_with_counts: {
        Row: {
          address: string | null
          booking_count: number | null
          category_id: string | null
          city: string | null
          country: string | null
          created_at: string | null
          deal_count: number | null
          deal_count_draft: number | null
          deal_count_expired: number | null
          deal_count_published: number | null
          description: string | null
          email: string | null
          fake: boolean | null
          id: string | null
          is_owner: boolean | null
          latitude: number | null
          longitude: number | null
          name: string | null
          owner_id: string | null
          pending_booking_count: number | null
          phone: string | null
          photos: string[] | null
          state: string | null
          updated_at: string | null
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          booking_count?: never
          category_id?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          deal_count?: never
          deal_count_draft?: never
          deal_count_expired?: never
          deal_count_published?: never
          description?: string | null
          email?: string | null
          fake?: boolean | null
          id?: string | null
          is_owner?: never
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          owner_id?: string | null
          pending_booking_count?: never
          phone?: string | null
          photos?: string[] | null
          state?: string | null
          updated_at?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          booking_count?: never
          category_id?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          deal_count?: never
          deal_count_draft?: never
          deal_count_expired?: never
          deal_count_published?: never
          description?: string | null
          email?: string | null
          fake?: boolean | null
          id?: string | null
          is_owner?: never
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          owner_id?: string | null
          pending_booking_count?: never
          phone?: string | null
          photos?: string[] | null
          state?: string | null
          updated_at?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businesses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations_with_details: {
        Row: {
          booking_id: string | null
          business_id: string | null
          business_name: string | null
          business_photo: string | null
          created_at: string | null
          deal_id: string | null
          deal_image: string | null
          deal_title: string | null
          id: string | null
          last_message: Json | null
          last_message_at: string | null
          owner_id: string | null
          participants: Json | null
          type: string | null
          unread_count: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["booking_id"]
          },
          {
            foreignKeyName: "conversations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "conversations_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals_with_info"
            referencedColumns: ["id"]
          },
        ]
      }
      deals_with_info: {
        Row: {
          auto_confirm: boolean | null
          business_address: string | null
          business_id: string | null
          business_name: string | null
          business_owner_id: string | null
          category_name: string | null
          description: string | null
          discount_percentage: number | null
          discounted_price: number | null
          end_date: string | null
          id: string | null
          original_price: number | null
          start_date: string | null
          status: Database["public"]["Enums"]["deal_status_enum"] | null
          time_slots: Json | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_owner_id_fkey"
            columns: ["business_owner_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
        ]
      }
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown | null
          f_table_catalog: unknown | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown | null
          f_table_catalog: string | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
      ln_canvas_with_sections: {
        Row: {
          canvas_created_at: string | null
          canvas_id: string | null
          canvas_id_fk: string | null
          canvas_name: string | null
          canvas_updated_at: string | null
          project_id: string | null
          section_created_at: string | null
          section_description: string | null
          section_id: string | null
          section_order: number | null
          section_title: string | null
          section_type: string | null
          section_updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_canvases_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "ln_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id_fk"]
            isOneToOne: false
            referencedRelation: "ln_canvas_with_sections"
            referencedColumns: ["canvas_id"]
          },
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id_fk"]
            isOneToOne: false
            referencedRelation: "ln_canvases"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_sections_with_items: {
        Row: {
          canvas_id: string | null
          item_content: string | null
          item_created_at: string | null
          item_id: string | null
          item_order: number | null
          item_updated_at: string | null
          section_description: string | null
          section_id: string | null
          section_key: string | null
          section_order: number | null
          section_title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id"]
            isOneToOne: false
            referencedRelation: "ln_canvas_with_sections"
            referencedColumns: ["canvas_id"]
          },
          {
            foreignKeyName: "ln_sections_canvas_id_fkey"
            columns: ["canvas_id"]
            isOneToOne: false
            referencedRelation: "ln_canvases"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_team_members_info: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string | null
          name: string | null
          role: string | null
          team_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_team_owners"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ln_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ln_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      ln_team_owners: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          last_name: string | null
          team_description: string | null
          team_id: string | null
          team_name: string | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ln_team_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      message_with_role: {
        Row: {
          business_name: string | null
          content: string | null
          conversation_id: string | null
          created_at: string | null
          first_name: string | null
          id: string | null
          read_at: string | null
          role: Database["public"]["Enums"]["conversation_role"] | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations_with_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
        ]
      }
      messages_with_user_details: {
        Row: {
          avatar_url: string | null
          content: string | null
          created_at: string | null
          first_name: string | null
          last_name: string | null
          message_id: string | null
          sender: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["sender"]
            isOneToOne: false
            referencedRelation: "booking_with_all_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["sender"]
            isOneToOne: false
            referencedRelation: "messages_with_user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["sender"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      mv_business_availability: {
        Row: {
          active_deals_count: number | null
          address: string | null
          booking_count: number | null
          business_id: string | null
          cancelled_booking_count: number | null
          category_id: string | null
          completed_booking_count: number | null
          confirmed_booking_count: number | null
          deal_count: number | null
          end_date: string | null
          expired_deals_count: number | null
          fake: boolean | null
          geom: unknown | null
          latitude: number | null
          longitude: number | null
          name: string | null
          owner_id: string | null
          pending_booking_count: number | null
          photos: string[] | null
          start_date: string | null
          time_slots: Json | null
          unique_clients_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businesses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users_with_details"
            referencedColumns: ["id"]
          },
        ]
      }
      types_view: {
        Row: {
          type_definition: string | null
        }
        Relationships: []
      }
      users_with_details: {
        Row: {
          avatar_url: string | null
          business_mode: boolean | null
          default_business_id: string | null
          display_name: string | null
          email: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          phone_number: string | null
          registered_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "businesses_with_counts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_details_default_business_id_fkey"
            columns: ["default_business_id"]
            isOneToOne: false
            referencedRelation: "mv_business_availability"
            referencedColumns: ["business_id"]
          },
        ]
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { oldname: string; newname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string }
        Returns: unknown
      }
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_selectivity: {
        Args: { tbl: unknown; att_name: string; geom: unknown; mode?: string }
        Returns: number
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_bestsrid: {
        Args: { "": unknown }
        Returns: number
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_pointoutside: {
        Args: { "": unknown }
        Returns: unknown
      }
      _st_sortablehash: {
        Args: { geom: unknown }
        Returns: number
      }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          g1: unknown
          clip?: unknown
          tolerance?: number
          return_polygons?: boolean
        }
        Returns: unknown
      }
      _st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      addauth: {
        Args: { "": string }
        Returns: boolean
      }
      addgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
              new_srid_in: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              schema_name: string
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
        Returns: string
      }
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      box: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box3d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3dtobox: {
        Args: { "": unknown }
        Returns: unknown
      }
      bytea: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      disablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      dropgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
            }
          | { schema_name: string; table_name: string; column_name: string }
          | { table_name: string; column_name: string }
        Returns: string
      }
      dropgeometrytable: {
        Args:
          | { catalog_name: string; schema_name: string; table_name: string }
          | { schema_name: string; table_name: string }
          | { table_name: string }
        Returns: string
      }
      enablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geography: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      geography_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geography_gist_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_gist_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_send: {
        Args: { "": unknown }
        Returns: string
      }
      geography_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geography_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry: {
        Args:
          | { "": string }
          | { "": string }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
        Returns: unknown
      }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_sortsupport_2d: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_hash: {
        Args: { "": unknown }
        Returns: number
      }
      geometry_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_send: {
        Args: { "": unknown }
        Returns: string
      }
      geometry_sortsupport: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_spgist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_3d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geometry_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometrytype: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      get_available_businesses: {
        Args: {
          p_date: string
          p_time?: string
          p_lat?: number
          p_lng?: number
          p_radius?: number
          p_category_id?: string
          p_cursor?: string
          p_limit?: number
        }
        Returns: {
          business_id: string
          business_name: string
          address: string
          latitude: number
          longitude: number
          distance: number
          photos: string[]
          category_id: string
          available_slots: Json
          start_date: string
          end_date: string
          next_cursor: string
        }[]
      }
      get_nearby_deals: {
        Args: {
          p_date: string
          p_time?: string
          p_lat?: number
          p_lng?: number
          p_radius?: number
          p_category_id?: string
          p_cursor?: string
          p_limit?: number
        }
        Returns: {
          deal_id: string
          title: string
          description: string
          original_price: number
          discounted_price: number
          discount_percentage: number
          images: string[]
          business_id: string
          business_name: string
          address: string
          latitude: number
          longitude: number
          distance: number
          category_id: string
          available_slots: Json
          start_date: string
          end_date: string
          next_cursor: string
        }[]
      }
      get_nearest_businesses_postgis: {
        Args:
          | {
              user_lat: number
              user_lon: number
              max_results?: number
              max_distance_km?: number
            }
          | {
              user_lat: number
              user_lon: number
              max_results?: number
              max_distance_km?: number
              require_deals?: boolean
            }
        Returns: {
          id: string
          name: string
          latitude: number
          longitude: number
          address: string
          distance: number
          deal_count: number
        }[]
      }
      get_proj4_from_srid: {
        Args: { "": number }
        Returns: string
      }
      gettransactionid: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      gidx_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gidx_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      import_leads_to_businesses: {
        Args:
          | { owner_id: string; category_id: string }
          | {
              owner_id: string
              source_category_name: string
              target_category_id: string
            }
          | {
              owner_id: string
              source_category_names: string[]
              target_category_id: string
            }
        Returns: number
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      json: {
        Args: { "": unknown }
        Returns: Json
      }
      jsonb: {
        Args: { "": unknown }
        Returns: Json
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      path: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_asflatgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_geometry_clusterintersecting_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_clusterwithin_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_collect_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_makeline_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_polygonize_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      point: {
        Args: { "": unknown }
        Returns: unknown
      }
      polygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      populate_geometry_columns: {
        Args:
          | { tbl_oid: unknown; use_typmod?: boolean }
          | { use_typmod?: boolean }
        Returns: number
      }
      postgis_addbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: string
      }
      postgis_dropbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_full_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_geos_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_geos_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_getbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_hasbbox: {
        Args: { "": unknown }
        Returns: boolean
      }
      postgis_index_supportfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_proj_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_svn_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_type_name: {
        Args: {
          geomname: string
          coord_dimension: number
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_typmod_dims: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_srid: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_type: {
        Args: { "": number }
        Returns: string
      }
      postgis_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      spheroid_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlength: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dperimeter: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle: {
        Args:
          | { line1: unknown; line2: unknown }
          | { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
        Returns: number
      }
      st_area: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_area2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_asbinary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_asewkt: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asgeojson: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; options?: number }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              r: Record<string, unknown>
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
            }
        Returns: string
      }
      st_asgml: {
        Args:
          | { "": string }
          | {
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              version: number
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | {
              version: number
              geom: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
        Returns: string
      }
      st_ashexewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_askml: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
          | { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
        Returns: string
      }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: {
        Args: { geom: unknown; format?: string }
        Returns: string
      }
      st_asmvtgeom: {
        Args: {
          geom: unknown
          bounds: unknown
          extent?: number
          buffer?: number
          clip_geom?: boolean
        }
        Returns: unknown
      }
      st_assvg: {
        Args:
          | { "": string }
          | { geog: unknown; rel?: number; maxdecimaldigits?: number }
          | { geom: unknown; rel?: number; maxdecimaldigits?: number }
        Returns: string
      }
      st_astext: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_astwkb: {
        Args:
          | {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
          | {
              geom: unknown
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
        Returns: string
      }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_boundary: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_boundingdiagonal: {
        Args: { geom: unknown; fits?: boolean }
        Returns: unknown
      }
      st_buffer: {
        Args:
          | { geom: unknown; radius: number; options?: string }
          | { geom: unknown; radius: number; quadsegs: number }
        Returns: unknown
      }
      st_buildarea: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_centroid: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      st_cleangeometry: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_clusterintersecting: {
        Args: { "": unknown[] }
        Returns: unknown[]
      }
      st_collect: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collectionextract: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_collectionhomogenize: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_concavehull: {
        Args: {
          param_geom: unknown
          param_pctconvex: number
          param_allow_holes?: boolean
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_convexhull: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_coorddim: {
        Args: { geometry: unknown }
        Returns: number
      }
      st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_curvetoline: {
        Args: { geom: unknown; tol?: number; toltype?: number; flags?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance?: number; flags?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_dimension: {
        Args: { "": unknown }
        Returns: number
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance: {
        Args:
          | { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_distancesphere: {
        Args:
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; radius: number }
        Returns: number
      }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dump: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumppoints: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumprings: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumpsegments: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_endpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_envelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_expand: {
        Args:
          | { box: unknown; dx: number; dy: number }
          | { box: unknown; dx: number; dy: number; dz?: number }
          | { geom: unknown; dx: number; dy: number; dz?: number; dm?: number }
        Returns: unknown
      }
      st_exteriorring: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_flipcoordinates: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force3d: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; zvalue?: number; mvalue?: number }
        Returns: unknown
      }
      st_forcecollection: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcecurve: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygonccw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygoncw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcerhr: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcesfs: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_generatepoints: {
        Args:
          | { area: unknown; npoints: number }
          | { area: unknown; npoints: number; seed: number }
        Returns: unknown
      }
      st_geogfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geogfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geographyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geohash: {
        Args:
          | { geog: unknown; maxchars?: number }
          | { geom: unknown; maxchars?: number }
        Returns: string
      }
      st_geomcollfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomcollfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometricmedian: {
        Args: {
          g: unknown
          tolerance?: number
          max_iter?: number
          fail_if_not_converged?: boolean
        }
        Returns: unknown
      }
      st_geometryfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometrytype: {
        Args: { "": unknown }
        Returns: string
      }
      st_geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromgeojson: {
        Args: { "": Json } | { "": Json } | { "": string }
        Returns: unknown
      }
      st_geomfromgml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromkml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfrommarc21: {
        Args: { marc21xml: string }
        Returns: unknown
      }
      st_geomfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromtwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_gmltosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_hasarc: {
        Args: { geometry: unknown }
        Returns: boolean
      }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_isclosed: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_iscollection: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isempty: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygonccw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygoncw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isring: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_issimple: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvalid: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvaliddetail: {
        Args: { geom: unknown; flags?: number }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
      }
      st_isvalidreason: {
        Args: { "": unknown }
        Returns: string
      }
      st_isvalidtrajectory: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_length: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_length2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_letters: {
        Args: { letters: string; font?: Json }
        Returns: unknown
      }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { txtin: string; nprecision?: number }
        Returns: unknown
      }
      st_linefrommultipoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_linefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linemerge: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linestringfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linetocurve: {
        Args: { geometry: unknown }
        Returns: unknown
      }
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset?: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          geometry: unknown
          frommeasure: number
          tomeasure: number
          leftrightoffset?: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { geometry: unknown; fromelevation: number; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_m: {
        Args: { "": unknown }
        Returns: number
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makepolygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { "": unknown } | { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_maximuminscribedcircle: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_memsize: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_minimumboundingradius: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_minimumclearance: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumclearanceline: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_mlinefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mlinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multi: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_multilinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multilinestringfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_ndims: {
        Args: { "": unknown }
        Returns: number
      }
      st_node: {
        Args: { g: unknown }
        Returns: unknown
      }
      st_normalize: {
        Args: { geom: unknown }
        Returns: unknown
      }
      st_npoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_nrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numgeometries: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorring: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpatches: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_offsetcurve: {
        Args: { line: unknown; distance: number; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_orientedenvelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { "": unknown } | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_perimeter2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_pointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointonsurface: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_points: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_polyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonize: {
        Args: { "": unknown[] }
        Returns: unknown
      }
      st_project: {
        Args: { geog: unknown; distance: number; azimuth: number }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_x: number
          prec_y?: number
          prec_z?: number
          prec_m?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: string
      }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_reverse: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid: {
        Args: { geog: unknown; srid: number } | { geom: unknown; srid: number }
        Returns: unknown
      }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shiftlongitude: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; vertex_fraction: number; is_outer?: boolean }
        Returns: unknown
      }
      st_split: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_square: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_srid: {
        Args: { geog: unknown } | { geom: unknown }
        Returns: number
      }
      st_startpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_subdivide: {
        Args: { geom: unknown; maxvertices?: number; gridsize?: number }
        Returns: unknown[]
      }
      st_summary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          zoom: number
          x: number
          y: number
          bounds?: unknown
          margin?: number
        }
        Returns: unknown
      }
      st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_transform: {
        Args:
          | { geom: unknown; from_proj: string; to_proj: string }
          | { geom: unknown; from_proj: string; to_srid: number }
          | { geom: unknown; to_proj: string }
        Returns: unknown
      }
      st_triangulatepolygon: {
        Args: { g1: unknown }
        Returns: unknown
      }
      st_union: {
        Args:
          | { "": unknown[] }
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; gridsize: number }
        Returns: unknown
      }
      st_voronoilines: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_wkbtosql: {
        Args: { wkb: string }
        Returns: unknown
      }
      st_wkttosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_wrapx: {
        Args: { geom: unknown; wrap: number; move: number }
        Returns: unknown
      }
      st_x: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmin: {
        Args: { "": unknown }
        Returns: number
      }
      st_y: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymax: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymin: {
        Args: { "": unknown }
        Returns: number
      }
      st_z: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmflag: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmin: {
        Args: { "": unknown }
        Returns: number
      }
      text: {
        Args: { "": unknown }
        Returns: string
      }
      unlockrows: {
        Args: { "": string }
        Returns: number
      }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          schema_name: string
          table_name: string
          column_name: string
          new_srid_in: number
        }
        Returns: string
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      business_subscription: "freemiun" | "basic" | "medium" | "large"
      conversation_role: "owner" | "customer" | "participant"
      deal_status_enum: "draft" | "published" | "expired"
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      business_subscription: ["freemiun", "basic", "medium", "large"],
      conversation_role: ["owner", "customer", "participant"],
      deal_status_enum: ["draft", "published", "expired"],
    },
  },
} as const
